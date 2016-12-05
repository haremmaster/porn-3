<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
  public function types()
  {
      return $this->hasMany('App\Type');
  }
}
