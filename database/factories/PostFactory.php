<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Post;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Post::class, function (Faker $faker) {
    $images = [
        'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg',
        'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
        'https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM4Y_m6SbMztUGALvkh5HQ5lMzuxVPY4Bu6YGmsL8PrV9i8_gDIw',
        'https://media.cntraveller.in/wp-content/uploads/2018/10/GettyImages-990972132-866x487.jpg',
        'https://www.oxforduniversityimages.com/images/rotate/Image_Spring_17_1.gif',
        'https://everydaypower.com/wp-content/uploads/2017/03/76-Inspirational-picture-quotes-and-motivational-images.jpg',
        'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://hips.hearstapps.com/rbk.h-cdn.co/assets/17/33/1502810299-gettyimages-681831352-1.jpg?crop=1.00xw:0.750xh;0,0.250xh&resize=480:*',
        'https://1.bp.blogspot.com/-O8-QGELCBCk/W1S76mbdpZI/AAAAAAAACAM/iu8byItGSj4OeWKlWg6cle1BaIH1unCXACLcBGAs/s1600/whatsapp%2Bdp%2Bimages%2Bflowers.jpg',
        'http://alena-vysotskaya.ru/images/300/DSC100354712.jpg',
    ];
    return [
        'title' => $faker->name,
        'description' => $faker->realText(1500),
        'img' => $images[random_int(0, count($images)-1)],
    ];
});
