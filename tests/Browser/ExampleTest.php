<?php

use App\Models\Project;
use Laravel\Dusk\Browser;

it('works', function () {
    $this->browse(function (Browser $browser) {
        $browser->visit('/')
            ->assertSee('Paperbase');
    });
});
