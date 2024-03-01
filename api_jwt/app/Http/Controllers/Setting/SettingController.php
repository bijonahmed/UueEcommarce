<?php

namespace App\Http\Controllers\Setting;

use DB;
use Auth;
use Helper;
use App\Models\User;
use App\Models\Profile;
use App\Models\Setting;
use App\Models\students;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\topHeaderBanner;
use App\Rules\MatchOldPassword;
use App\Http\Controllers\Controller;
use App\Models\dealsbanner;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SettingController extends Controller
{
    protected $userid;
    public function __construct()
    {
        // $this->middleware('auth:api');
        // $id = auth('api')->user();
        // if (!empty($id)) {
        //     $user = User::find($id->id);
        //     $this->userid = $user->id;
        // }
    }
    public function insertEmployeeType(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('employee_type')->insertGetId($data);
        } else {
            DB::table('employee_type')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPayGroup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('pay_group')->insertGetId($data);
        } else {
            DB::table('pay_group')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertAnnualPay(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('annual_pay')->insertGetId($data);
        } else {
            DB::table('annual_pay')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertBankMaster(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('bank_master')->insertGetId($data);
        } else {
            DB::table('bank_master')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertWedges(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('wedges_pay_mode')->insertGetId($data);
        } else {
            DB::table('wedges_pay_mode')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPayItem(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'              => !empty($request->name) ? $request->name : "",
            'in_percent'        => !empty($request->in_percent) ? $request->in_percent : "",
            'in_rupees'         => !empty($request->in_rupees) ? $request->in_rupees : "",
            'min_value'         => !empty($request->min_value) ? $request->min_value : "",
            'max_value'         => !empty($request->max_value) ? $request->max_value : "",
            'effective_frm'     => !empty($request->effective_frm) ? date("Y-m-d", strtotime($request->effective_frm)) : "",
            'effective_to'      => !empty($request->effective_to) ? date("Y-m-d", strtotime($request->effective_to)) : "",
            'status'            => !empty($request->status) ? $request->status : "",
            'entry_by'           => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('payroll_pay_item')->insertGetId($data);
        } else {
            DB::table('payroll_pay_item')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertBankCode(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'bank_id'   => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'          => !empty($request->name) ? $request->name : "",
            'status'        => !empty($request->status) ? $request->status : "",
            'bank_id'       => !empty($request->bank_id) ? $request->bank_id : "",
            'entry_by'      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('bank_short_code')->insertGetId($data);
        } else {
            DB::table('bank_short_code')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertTaxMaster(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                          => !empty($request->name) ? $request->name : "",
            'percentage_of_deduction'       => !empty($request->percentage_of_deduction) ? $request->percentage_of_deduction : "",
            'tax_reference'                 => !empty($request->tax_reference) ? $request->tax_reference : "",
            'status'                        => !empty($request->status) ? $request->status : "",
            'entry_by'                      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('tax_master')->insertGetId($data);
        } else {
            DB::table('tax_master')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function insertPaymentType(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'              => 'required',
            'working_hour'      => 'required',
            'rate'      => 'required',
            'status'    => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'                          => !empty($request->name) ? $request->name : "",
            'working_hour'                  => !empty($request->working_hour) ? $request->working_hour : "",
            'rate'                          => !empty($request->rate) ? $request->rate : "",
            'status'                        => !empty($request->status) ? $request->status : "",
            'entry_by'                      => $this->userid,
        );
        // dd($data);
        if (empty($request->id)) {
            DB::table('payment_type')->insertGetId($data);
        } else {
            DB::table('payment_type')->where('id', $request->id)->update($data);
        }
        $response = [
            'message' => 'Successfull',
        ];
        return response()->json($response);
    }
    public function getEmployeeTypeList(Request $request)
    {
        try {
            $rows = Setting::filterEmpList($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getPayGroupList(Request $request)
    {
        try {
            $rows = Setting::filterPayGroupList($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getAnnualPayist(Request $request)
    {
        try {
            $rows = Setting::filterAnnualPay($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getBankMasterlist(Request $request)
    {
        try {
            $rows = Setting::filterbankMaster($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function gettxtMastlist(Request $request)
    {
        try {
            $rows = Setting::filtertaxtMaster($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getWdges(Request $request)
    {
        try {
            $rows = Setting::filterWdges($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getPayItemList(Request $request)
    {
        try {
            $rows = Setting::filterPayItemlist($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getPaymentType(Request $request)
    {
        try {
            $rows = Setting::filterpaymentType($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function getBankShortCodelist(Request $request)
    {
        try {
            $rows = Setting::filterBShortCode($request->all());
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }
    public function checkrowEmpleeType($id)
    {
        $id = (int) $id;
        $data = Setting::editEmpTypeId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowPayGroup($id)
    {
        $id = (int) $id;
        $data = Setting::editPayGroupId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowAnnualPay($id)
    {
        $id = (int) $id;
        $data = Setting::editAnnualPayId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowBankMaster($id)
    {
        $id = (int) $id;
        $data = Setting::editBankMasterId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowBankShortCode($id)
    {
        $id = (int) $id;
        $data = Setting::editBankShortCodeId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowtxtmaster($id)
    {
        $id = (int) $id;
        $data = Setting::edittxtMasterId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowPaymenttype($id)
    {
        $id = (int) $id;
        $data = Setting::editPaymentId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkrowWedges($id)
    {
        $id = (int) $id;
        $data = Setting::editWedgesId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }
    public function checkPayItemRow($id)
    {
        $id = (int) $id;
        $data = Setting::editPayrowId($id);
        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    // brands part start here 
    public function addbrands()
    {
    }
    // ads part start here 

    public function getbannerTop()
    {

        $banner    = topHeaderBanner::first();
        $imagesUrl = !empty($banner->image) ? url($banner->image) : "";

        if ($banner->count() > 0) {
            return response()->json([
                'status' => 200,
                'images' => $imagesUrl
            ], 200);
        } else {
            return response()->json([
                'status' => 202,
                'message' => "Banner Not Found"
            ], 202);
        }
    }
    public function updatebannerTop(Request $request)
    {

        $messages = [
            'image' => 'Image size must be 640x33 and jpg,png,jpeg,gif',
        ];
        $validator = Validator::make($request->all(), [
            'image'     => 'mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=640,min_height=33,max_width=640,max_height=33',
            // |dimensions:min_width=640,min_height=33,max_width=640,max_height=33
            'status'    => 'string',
        ], $messages);


        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        } else {
            if ($request->hasFile("image")) {

                $bannerAdd = topHeaderBanner::first();

                $image = $request->image;
                $imageName = "/bannerImage/" . time() . "." . $image->getClientOriginalExtension();
                $image->move(public_path("bannerImage"), $imageName);

                if (!empty($bannerAdd->image) && File::exists(public_path($bannerAdd->image))) {
                    File::delete(public_path($bannerAdd->image));
                }

                // $bannerAdd = topHeaderBanner::create([               
                $bannerAdd->update([
                    "image" => $imageName,
                    "status" => $request->status,
                ]);
                // ]);

                if ($bannerAdd) {

                    $images = url($imageName);

                    return response()->json([
                        "status" => 200,
                        "images" => $images,

                    ], 200);
                } else {
                    return response()->json([
                        "status" => 500,
                        "errors" => "Something went wrong"
                    ], 500);
                }
            }
        }
    }
    public function updatedealsbannner(request $request)
    {
        $messages = [
            'imageOne' => 'Image size must be 572x250 and jpg,png,jpeg,gif',
            'imageTwo' => 'Image size must be 572x250 and jpg,png,jpeg,gif',
        ];
        $validator = Validator::make($request->all(), [
            'imageOne' => 'mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=572,min_height=250,max_width=572,max_height=250',
            'imageTwo' => 'mimes:jpg,png,jpeg,gif,webp|dimensions:min_width=572,min_height=250,max_width=572,max_height=250',
        ], $messages);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $dealsBanner = dealsbanner::first();

        if ($request->hasFile('imageOne')) {
            $image = $request->imageOne;
            $imageName = "/bannerImage/" . time() . "img." . $image->getClientOriginalExtension();
            $image->move(public_path("bannerImage"), $imageName);
            // Delete previous image if it exists
            if (!empty($dealsBanner->imageOne) && File::exists(public_path($dealsBanner->imageOne))) {
                File::delete(public_path($dealsBanner->imageOne));
            }
            $dealsBanner->update(["imageOne" => $imageName]);
        }

        if ($request->hasFile('imageTwo')) {
            $imageTwo = $request->imageTwo;
            $imageNameTwo = "/bannerImage/" . time() . "." . $imageTwo->getClientOriginalExtension();
            $imageTwo->move(public_path("bannerImage"), $imageNameTwo);
            // Delete previous image if it exists
            if (!empty($dealsBanner->imageTwo) && File::exists(public_path($dealsBanner->imageTwo))) {
                File::delete(public_path($dealsBanner->imageTwo));
            }
            $dealsBanner->update(["imageTwo" => $imageNameTwo]);
        }

        if ($dealsBanner->count() > 0) {
            $imageOne = $dealsBanner->imageOne ? url($dealsBanner->imageOne) : null;
            $imageTwo = $dealsBanner->imageTwo ? url($dealsBanner->imageTwo) : null;
            return response()->json([
                'status' => 200,
                'imageOne' => $imageOne,
                'imageTwo' => $imageTwo
            ], 200);
        } else {
            return response()->json([
                'status' => 202,
                'message' => "Banner Not Found"
            ], 202);
        }
    }

    public function getdealsbanners()
    {

        $dealbanner    = dealsbanner::first();
        // $imagesUrlone = !empty($dealbanner->image) ? url($dealbanner->imageOne) : "";
        // $imagesUrltwo = !empty($dealbanner->image) ? url($dealbanner->imageTwo) : "";

        if ($dealbanner->count() > 0) {
            return response()->json([
                'status' => 200,
                'imageone' => url($dealbanner->imageOne),
                'imagetwo' => url($dealbanner->imageTwo),
            ], 200);
        } else {
            return response()->json([
                'status' => 202,
                'message' => "Banner Not Found"
            ], 202);
        }
    }
}
