<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
  public function sites()
  {
      return $this->belongsToMany('App\Site');
  }
}
