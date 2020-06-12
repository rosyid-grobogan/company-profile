<template>
    <div class="container">
        <div class="row justify-content-center">


          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Users Table</h3>
                <div class="card-tools ">
                    <div class="input-group input-group-sm">
                  <button class="btn btn-success " data-toggle="modal" data-target="#userForm">Add New <i class="fas fa-user-plus"></i></button>
                    </div>
                </div>



              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Type</th>
                      <th>Registered At</th>
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.id }}</td>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.type | upText}}</td>
                      <td>{{ user.created_at| myDate }}</td>

                      <td>
                          <a href="#">
                              <i class="fa fa-edit text-blue"></i>
                          </a>
                            /
                          <a href="#" @click="deleteUser(user.id)">
                              <i class="fa fa-trash text-red"></i>
                          </a>
                      </td>                      
                    </tr>


                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>

          <!-- Modal -->
<div class="modal fade" id="userForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addModalLabel">Add New User</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <form @submit.prevent="createUser">
      <div class="modal-body">

        <div class="form-group">
          <label>Username</label>
          <input v-model="form.name" type="text" name="name"
            placeholder="Enter your name"
            class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
          <has-error :form="form" field="name"></has-error>
        </div>

        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="text" name="email"
            placeholder="Enter your email"
            class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
          <has-error :form="form" field="email"></has-error>
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="form.password" type="password" name="password"
            placeholder="Enter your password"
            class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
          <has-error :form="form" field="password"></has-error>
        </div>

        <div class="form-group">
          <label>Bio</label>
          <textarea v-model="form.bio" type="text" name="bio"
            placeholder="Short bio for user (optional)"
            class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
          <has-error :form="form" field="bio"></has-error>
        </div>

        <div class="form-group">
          <label>Select User Role</label>
          <select name="type" id="type" class="form-control"
                v-model="form.type"
                :class="{ 'is-invalid': form.errors.has('bio') }"
                >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">Standard User</option>
            <option value="author">Author</option>
          </select>
          <has-error :form="form" field="type"></has-error>
        </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Create</button>
      </div>
      </form>

    </div>
  </div>
</div>
        

        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                // register
                form: new Form({
                    // parameter unit
                    name : '',
                    email : '',
                    type : '',
                    bio : '',
                    photo : ''
                }),
                users : {}
            }
        },
        methods: {
          createUser() {
           this.$Progress.start()               
            this.form.post('api/users')
            .then( () =>{
            this.$Progress.start()  
            Fire.$emit('AfterCreate')
            $('#userForm').modal('hide')
            Toast.fire({
              icon: 'success',
              title: 'User Created in successfully'
            })            
            this.$Progress.finish()
            })
            .catch( ()=>{
              // Calling error
            })

          },
          loadUsers(){
            axios.get('api/users').then( ({ data }) => (this.users = data.data) );
          },
          deleteUser(id) {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {

              // send requet to the server
              if (result.value) {              
              this.form.delete('api/users/'+id)
              .then( ()=> {
                  Fire.$emit('AfterCreate')
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )               
              })
              .catch( ()=>{
                   Swal.fire(
                    'Failed!',
                    'There was something wrong.',
                    'warning'
                  )               
              })

              }
            })
          }
        },
        mounted() {
            console.log('Component mounted.')
        },
        created() {           
            this.loadUsers();
            //load after 3 second when created
            //setInterval(this.loadUsers(), 3000)

            ////load after 3 second
            //setInterval(() => this.loadUsers(), 3000)

            Fire.$on('AfterCreate', () => {
              this.loadUsers()
            })
        }
    }
</script>
