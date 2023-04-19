# Convoy Starter Kit

## Storybook
All React Components should be documented in a corresponding `Component.stories.jsx` file.

You may start storybook by running:
```sh
npm run storybook
```

## Broadcasting
This Starter Kit allows for broadcasting with [soketi](https://soketi.app/). start using real-time events by uncommenting the soketi service within your `docker-compose.yml` and register the BroadcastServiceProvider. Check the [laravel documentation](https://laravel.com/docs/9.x/broadcasting) and learn more about broadcasting and realtime, live-updating user interfaces.
