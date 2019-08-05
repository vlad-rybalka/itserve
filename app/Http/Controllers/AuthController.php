<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $result = ['success'=>false];
        
        $user = User::where('email', $request->email)->first();
        if(!$user){
            $result['errors']['email'] = "User with this email not found";
            return response()->json($result, 400);
        }
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                $result['errors']['password'] = "Wrong password";
                return response()->json($result, 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user = $request->user();
        $result['success'] = true;
        $result['user'] = $user;
        $result['token'] = $token;

        return response()->json($result, 200);
    }

    public function register(Request $request)
    {
        $result = ['success'=>false];
        $validator = Validator::make($request->all(), [
            'nickname' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if($validator->fails()){
                $result['errors'] = $validator->errors();
                return response()->json($result, 422);
        }

        $user = User::create([
            'nickname' => $request->get('nickname'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);

        $token = JWTAuth::fromUser($user);
        
        $result['success'] = true;
        $result['user'] = $user;
        $result['token'] = $token;

        return response()->json($result, 201);
    }
}