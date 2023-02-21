.PHONY: test
test:
	php artisan test

.PHONY: dusk
dusk:
	php artisan pest:dusk