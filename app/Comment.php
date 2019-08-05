<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = [
        'text', 'post_id', 'user_id', 'parent_id'
    ];

    public function comments()
    {
        return $this->hasMany('App\Comment', 'parent_id')->with('comments','user');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
