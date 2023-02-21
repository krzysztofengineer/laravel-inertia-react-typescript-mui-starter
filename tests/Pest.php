<?php

use Illuminate\Foundation\Testing\RefreshDatabaseState;
use Tests\TestCase;
use Tests\DuskTestCase;

uses(
    TestCase::class,
)->in('Feature');

uses(DuskTestCase::class)->in('Browser');

expect()->extend('toBeOne', function () {
    return $this->toBe(1);
});
