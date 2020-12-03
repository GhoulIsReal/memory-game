<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $users = User::where('score', '<>', '0')->orderBy('score')->get()->take(20);
        return Inertia::render('Home', compact('users'));
    }
}
