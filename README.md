&lt;hello-world&gt;
====

Install
----

Polyfill tags if you need them. This will include ShadowDOM and Custom Elements support.

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@latest/webcomponents-sd-ce.js"></script>
```

Loading this component. It would be a good idea to use a specific version instead of `latest`.

```
<script src="https://unpkg.com/hello-world@latest/dist/hello-world.min.js"></script>
```

Usage
----

```
  <hello-world name="Pickle"></hello-world>

  <hello-world>Slot content</hello-world>
```

License
----

HelloWorld is released under an MIT license.

Built, tested, and published with [Nutmeg](https://nutmeg.tools).
