<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'username' => ['required', 'string', 'max:255', 'alpha_dash', 'unique:users,username', 'regex:/(^([a-zA-Z]+)(\d+)?$)/u'],
            'password' => $this->passwordRules(),
        ])->validate();

        return User::create([
            'username' => $input['username'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
