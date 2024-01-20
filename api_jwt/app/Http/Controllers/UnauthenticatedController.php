<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Product;
use App\Models\User;
use App\Models\Sliders;
use App\Models\SellerAds;
use App\Models\ProductCategory;
use App\Models\ProductAdditionalImg;
use App\Models\Categorys;
use App\Models\User as ModelsUser;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;
use File;
use PhpParser\Node\Stmt\TryCatch;
//use User;
use Workbench\App\Models\User as AppModelsUser;

use function Ramsey\Uuid\v1;

class UnauthenticatedController extends Controller
{
    protected $frontend_url;
    protected $userid;

    public function allCategory(Request $request)
    {
        $categories = Categorys::with('children.children.children.children.children')->where('parent_id', 0)->get();
        return response()->json($categories);
    }

    public function limitedProducts()
    {

        $data = Product::orderBy('id', 'desc')->select('id', 'name', 'thumnail_img', 'slug')->limit(12)->get();
        //dd($data);
        $collection = collect($data);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'id'        => $item['id'],
                'name'      => substr($item['name'], 0, 20),
                'thumnail'  => !empty($item->thumnail_img) ? url($item->thumnail_img) : "",
                'slug'        => $item['slug'],
            ];
        });
        //dd($modifiedCollection);
        return response()->json($modifiedCollection, 200);
    }


    public function pagniatedProducts(Request $request)
    {

        $perPage = 12; // You can adjust the number of items per page as needed
        $products = Product::where('status', 1)
            ->select('id', 'discount', 'name as pro_name', 'description', 'price', 'thumnail_img', 'slug as pro_slug')
            ->orderBy('created_at', 'desc') // Or use the appropriate column
            ->paginate($perPage);

        $result = [];
        foreach ($products as $key => $v) {
            $result[] = [
                'id'           => $v->id,
                'product_id'   => $v->id,
                'product_name' => $v->pro_name,
                'category_id'  => $v->category_id,
                'discount'     => $v->discount,
                'price'        => number_format($v->price, 2),
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->pro_slug,

            ];
        }

        $data['result']        = $result;
        $data['pro_count']     = count($result);
        return response()->json($data, 200);
    }

    public function topSellProducts()
    {
        $data = Product::orderBy('id', 'desc')->select('id', 'name', 'thumnail_img', 'slug')->limit(12)->get();
        foreach ($data as $v) {
            $result[] = [
                'id'   => $v->id,
                'name' => substr($v->name, 0, 12) . '...',
                'thumnail'  => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'     => $v->slug,
            ];
        }

        // dd($result);
        return response()->json($result, 200);
    }

    public function slidersImages()
    {
        $data = Sliders::where('status', 1)->get();

        foreach ($data as $v) {
            $result[] = [
                'id'           => $v->id,
                'images'       => !empty($v->images) ? url($v->images) : "",
            ];
        }

        return response()->json($result, 200);
    }

    public function productCategory(Request $request)
    {

        $category_id = $request->category_id;
        $category    = Categorys::find($category_id);
        $categorys   = ProductCategory::join('product', 'product.id', '=', 'produc_categories.product_id')
            ->select('produc_categories.product_id', 'product.name', 'product.slug', 'product.thumnail_img')
            ->where('produc_categories.category_id', $category_id)
            ->orderByDesc('product.id')
            ->limit(10)
            ->get();

        foreach ($categorys as $v) {
            $result[] = [
                'product_id'   => $v->product_id,
                'name'         => substr($v->name, 0, 12) . '...',
                'thumnail'     => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'         => $v->slug,
            ];
        }

        $data['result']  = !empty($result) ? $result : "";
        $data['name']    = $category->name;
        $data['catslug'] = $category->slug;
        return response()->json($data, 200);
    }

    public function filterCategory(Request $request)
    {
        $categories = Categorys::where('status', 1)->orderBy("name", "asc")->get();;
        return response()->json($categories);
    }



    public function getSellerCategoryFilter($category_id)
    {

        $allProducts = ProductCategory::join('product', 'produc_categories.product_id', '=', 'product.id')
            ->where('produc_categories.category_id', $category_id)
            ->select('product.id as product_id', 'product.name as product_name', 'product.thumnail_img','product.slug','product.price','product.discount','produc_categories.category_id')
            ->get();

        foreach ($allProducts as $v) {
            $products[] = [
                'id'           => $v->product_id,
                'name'         => substr($v->product_name, 0, 12) . '...',
                'thumnail'     => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'         => $v->slug,
                'price'        => $v->price,
                'discount'     => $v->discount,
            ];
        }
        $data['products']                = !empty($products) ? $products : "";

        // dd($data['products']);
        return response()->json($data);
    }





    public function getSeller($slug)
    {

        $row    = User::where('business_name_slug', $slug)->first();

        $sliderImg   = Product::where('seller_id', $row->id)->where('status', 1)->limit(12)->get();
        $allProducts = Product::where('seller_id', $row->id)->where('status', 1)->get();

        $findCategory = $allProducts;
        $categoryList = [];
        foreach ($findCategory as $v) {
            $category = ProductCategory::where('product_id', $v->id)->select('category_id')->first();
            if ($category) {
                $catName = Categorys::where('id', $category->category_id)->select('name')->first();
                if ($catName) {
                    $categoryList[] = [
                        'name' => $catName->name,
                        'id'   => $category->category_id,
                    ];
                }
            }
        }
        foreach ($sliderImg as $v) {
            $slidersImg[] = [
                'id'           => $v->id,
                'name'         => substr($v->name, 0, 12) . '...',
                'thumnail'     => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'         => $v->slug,
                'price'        => $v->price,
                'discount'     => $v->discount,
            ];
        }

        foreach ($allProducts as $v) {
            $products[] = [
                'id'           => $v->id,
                'name'         => substr($v->name, 0, 12) . '...',
                'thumnail'     => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'         => $v->slug,
                'price'        => $v->price,
                'discount'     => $v->discount,
            ];
        }

        $businessLogog = !empty($row) ? url($row->business_logo) : "";
        $data['business_owner_name']     = !empty($row) ? $row->business_owner_name : "";
        $data['business_name']           = !empty($row) ? $row->business_name : "";
        $data['business_address']        = !empty($row) ? $row->business_address : "";
        $data['business_register_num']   = !empty($row) ? $row->business_register_num : "";
        $data['business_email']          = !empty($row) ? $row->business_email : "";
        $data['business_phone']          = !empty($row) ? $row->business_phone : "";
        $data['business_logo']           = $businessLogog;
        $data['slidersImg']              = !empty($slidersImg) ? $slidersImg : "";
        $data['products']                = !empty($products) ? $products : "";
        $data['categoryList']            = !empty($categoryList) ? $categoryList : "";

        //ads banner 
        $topBanner      = SellerAds::where('seller_id', $row->id)->where('position', 'top_banner_img')->first();
        $bannerAds_1    = SellerAds::where('seller_id', $row->id)->where('position', 'banner_1')->first();
        $bannerAds_2    = SellerAds::where('seller_id', $row->id)->where('position', 'banner_2')->first();
        $bannerAds_3    = SellerAds::where('seller_id', $row->id)->where('position', 'banner_3')->first();
        $bannerAds_4    = SellerAds::where('seller_id', $row->id)->where('position', 'banner_4')->first();
        $bannerAds_5    = SellerAds::where('seller_id', $row->id)->where('position', 'banner_5')->first();
        $youtube_ads    = SellerAds::where('seller_id', $row->id)->where('position', 'youtube_videos')->first();
       // dd($youtube_ads->file_name);
        $data['top_banner_img']       = !empty($topBanner) ? url($topBanner->file_name) : "";
        $data['banner1']              = !empty($bannerAds_1) ? url($bannerAds_1->file_name) : "";
        $data['banner2']              = !empty($bannerAds_2) ? url($bannerAds_2->file_name) : "";
        $data['banner3']              = !empty($bannerAds_3) ? url($bannerAds_3->file_name) : "";
        $data['banner4']              = !empty($bannerAds_4) ? url($bannerAds_4->file_name) : "";
        $data['banner5']              = !empty($bannerAds_5) ? url($bannerAds_5->file_name) : "";
        $data['file_name']            = !empty($youtube_ads) ? $youtube_ads->file_name : "";
        //END baner 
        return response()->json($data);
    }

    public function findProductSlug($slug)
    {

        $data['pro_row']  = Product::where('product.slug', $slug)
            ->select('product.id', 'product.id as product_id', 'product.name', 'product.slug as pro_slug', 'product.thumnail_img', 'description', 'product.price', 'product.discount', 'product.stock_qty', 'product.stock_mini_qty')
            ->first();


        $product_chk       = Product::where('product.slug', $slug)
            ->select('product.id', 'product.id as product_id', 'product.name', 'product.slug as pro_slug', 'product.thumnail_img', 'description', 'product.price', 'product.discount', 'product.stock_qty', 'product.stock_mini_qty')
            ->get();
        $products = [];
        foreach ($product_chk as $key => $v) {
            $products[] = [
                'id'           => $v->id,
                'product_id'   => $v->product_id,
                'product_name' => $v->pro_name,
                'discount'     => $v->discount,
                'price'        => number_format($v->price, 2),
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->pro_slug,

            ];
        }
        $findproductrow   = $data['pro_row'];
        $data['att_img']  = ProductAdditionalImg::where('produc_img_history.product_id', $findproductrow->id)->get();
        foreach ($data['att_img'] as $v) {
            $mul_slider_img[] = [
                'product_id'   => $v->product_id,
                'thumnail'     => !empty($v->images) ? url($v->images) : "",
            ];
        }
        $data['slider_img']    = !empty($mul_slider_img) ? $mul_slider_img : "";
        $data['featuredImage'] = url($findproductrow->thumnail_img);
        $data['product']      = $products;
        return response()->json($data, 200);
    }

    public function findCategorys($slug)
    {

        $chkCategory   = Categorys::where('slug', $slug)->select('id', 'name')->first();
        $proCategorys  = ProductCategory::where('category_id', $chkCategory->id)
            ->select('product.id', 'product.discount', 'produc_categories.product_id', 'product.name as pro_name', 'produc_categories.category_id', 'description', 'price', 'thumnail_img', 'product.slug as pro_slug')
            ->join('product', 'product.id', '=', 'produc_categories.product_id')->get();

        $result = [];
        foreach ($proCategorys as $key => $v) {
            $result[] = [
                'id'           => $v->id,
                'product_id'   => $v->product_id,
                'product_name' => $v->pro_name,
                'category_id'  => $v->category_id,
                'discount'     => $v->discount,
                'price'        => number_format($v->price, 2),
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->pro_slug,

            ];
        }

        $data['result']        = $result;
        $data['pro_count']     = count($result);
        $data['categoryname']  = $chkCategory->name;
        return response()->json($data, 200);
    }
}
