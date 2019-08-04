<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{

    public function index()
    {
        $result = ['success'=>true];

        $posts = Post::paginate(15);
        $posts->makeHidden(['description','updated_at']);
        
        $result['posts'] = $posts->items();
        $result['pagination']['currentPage'] = $posts->currentPage();
        $result['pagination']['total'] = $posts->total();
        $result['pagination']['perPage'] = $posts->perPage();

        return response()->json($result, 200);

    }

    public function store(PostRequest $request)
    {
        $result = ['success'=>true];

        $path = "/"."storage/";
        $path .= $request->file('file')->store('uploads','public');

        $post = new Post;
        $post->title = $request->title;
        $post->description = $request->description;
        $post->img = $path;
        $post->save();

        $result['data'] = $post;
        
        return response()->json($result, 201);
    }

    public function show(Post $post)
    {
        
        return Post::with('comments')->whereIn('id', $post)->get()->first();
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
