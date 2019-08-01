<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        return Post::all();
    }

    public function store(Request $request)
    {
        return Post::create($request->all());
    }

    public function show(Post $post)
    {
        return Post::find($post);
    }

    public function update(Request $request, Post $post)
    {
        $post = Post::findOrFail($post)->first();
        $post->update($request->all());
        $post->save();
        return $post;
    }

    public function delete(Post $post)
    {
        $post = Post::findOrFail($post)->first();
        $post->delete();

        return 204;
    }
}
