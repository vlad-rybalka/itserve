<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
                <router-link :to="{name: 'home'}">
                    <b-navbar-brand>IT Serve</b-navbar-brand>
                </router-link>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template slot="button-content"><em>User</em></template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>
