<?php

use App\Models\Project;
use Laravel\Dusk\Browser;

it('works', function () {
    $this->browse(function (Browser $browser) {
        $projects = Project::factory(count: 10)->create();

        $browser->visit('/')
            ->waitForText($projects[0]->name)
            ->assertSee($projects[0]->name)
            ->assertSee($projects[9]->name);
    });
});
