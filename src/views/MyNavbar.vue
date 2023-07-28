<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/slot">Slot</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Binding
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="nav-link" to="/data-binding">Data</RouterLink></li>
              <li><hr class="dropdown-divider" /></li>
              <li><RouterLink class="nav-link" to="/attribute-binding">Attribute</RouterLink></li>
              <li><hr class="dropdown-divider" /></li>
              <li><RouterLink class="nav-link" to="/event-binding">Event</RouterLink></li>
              <li><hr class="dropdown-divider" /></li>
              <li><RouterLink class="nav-link" to="/reactive-binding">Reactive</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
