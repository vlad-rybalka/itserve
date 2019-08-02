<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'description', 'img', 'short_description'
    ];

    protected $appends = [
        'short_description'
    ];

    public function getShortDescriptionAttribute()
    {
        return mb_substr($this->description, 0, 250);
    }



}
