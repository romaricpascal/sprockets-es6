# Files in `public` are ultimately [served by ::Rack::Files][rails-static].
# For `.mjs` to be ran by browsers, they need to be served with the right `Content-Type`,
# so we need to [make Rack aware of the proper MIME type for `.mjs` files][rack-mime]
#
# [rails-static]: https://github.com/rails/rails/blob/e78ed07e008676752b2ed2cff97e74b31ffacaf5/actionpack/lib/action_dispatch/middleware/static.rb#L56
# [rack-mime]: https://www.rubydoc.info/github/rack/rack/Rack/Mime
Rack::Mime::MIME_TYPES.merge!({
  '.mjs' => 'text/javascript'
})
