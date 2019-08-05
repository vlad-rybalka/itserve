<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $result = ['success'=>true];

        $validator = Validator::make($request->all(), [
            'text' => 'required|string|max:500',
        ]);

        if($validator->fails()){
                $result['success'] = false;
                $result['errors'] = $validator->errors();
                return response()->json($result, 422);
        }

        $comment = Comment::create([
            'text' => $request->get('text'),
            'post_id' => $request->get('post_id'),
            'user_id' => $request->get('user_id'),
            'parent_id' => $request->has('parent_id') ? $request->get('parent_id') : 0,
        ]);

        $result['comment'] = $comment;
        $result['comment']['comments'] = [];
        $result['comment']['user'] = $comment->user;
        
        return response()->json($result, 201);
    }
}
