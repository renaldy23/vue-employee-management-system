<template>
  <nav class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a class="navbar-brand" href="#">EMS</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"><span class="text-white"><i class="fas fa-bars"></i></span></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item px-2">
                    <router-link class="nav-link pl-2" to="/" exact>Dashboard</router-link>
                </li>
                <li class="nav-item px-2">
                    <router-link class="nav-link pl-2" to="/employees" exact>Employees</router-link>
                </li>
            </ul>
        </div>
      </div>
  </nav>
  <div id="data-background">
    
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar{
  background-color: #0A1931;
}
.navbar ul li a,.navbar .navbar-brand{
  color: #FFF;
}
.navbar-brand{
  font-weight: bold;
}
.active{
  background-color: #FFC947;
  border-radius: 7px;
}
.navbar ul li a:hover{
  background-color: #185ADB;
  border-radius: 7px;
}
.navbar ul li{
  margin-right: 7px;
  font-size: 14px;
}

#data-background{
    position: absolute;
    background-color: #0A1931;
    width: 100%;
    height: 50%;
    z-index: -100;
}
</style>
