<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'description', 'img', 'short_description'
    ];

    protected $appends = [
        'short_description', 'count_comments'
    ];


    public function comments()
    {
        return $this->hasMany('App\Comment')->where('parent_id', 0)->with('comments');
    }

    public function getShortDescriptionAttribute()
    {
        return mb_substr($this->description, 0, 250);
    }
    public function getCountCommentsAttribute()
    {
       return $this->hasMany('App\Comment')->count();
   
    }



}
