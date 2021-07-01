<template>
    <div class="employees">
         <div class="container pt-3">
            <h3>Employee List</h3>
            <div class="card mt-4">
                <div class="card-header">
                    List of Employees
                </div>
                <div class="card-body">
                    <EmployeesContent/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmployeesContent from '@/components/EmployeesContent.vue'
export default {
    name: 'Employees',
    components:{
        EmployeesContent
    }
}
</script>

<style scoped>
h3{
    color: white;
}
</style>