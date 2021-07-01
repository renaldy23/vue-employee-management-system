<template>
    <div class="content-employee">
        <div class="d-flex mb-3">
            <input type="text" name="" id="" class="form-control" placeholder="Type something ...">
            <button type="submit" class="btn mr-2 btn-search">Search</button>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Apply At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item , index) in employees" :key="item.id">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.position }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.apply }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            employees:[
                {
                    id:1,
                    name:"Jonathan Howardy",
                    position: "Frontend Developer",
                    status:"Permanent",
                    apply: "23-06-2021"
                },
                {
                    id:2,
                    name:"Yurary Pulsen",
                    position: "Product Manager",
                    status:"Contract",
                    apply: "19-01-2020"
                }, 
                {
                    id:3,
                    name:"Nohara Aike",
                    position: "UI/UX Designer",
                    status:"Probation",
                    apply: "01-03-2021"
                }, 
                {
                    id:4,
                    name:"Marteen Adina",
                    position: "Backend Developer",
                    status:"Permanent",
                    apply: "02-05-2021"
                },
            ],
        }
    }
}
</script>

<style scoped>
.btn-search{
    background-color: #185ADB;
    color: white;
}
.btn-search:hover{
    background-color: #164dbb;
    color: white;
}
</style>