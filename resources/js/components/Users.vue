<template>
    <div class="container">
        <div class="row justify-content-center">


          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Users Table</h3>
                <div class="card-tools ">
                    <div class="input-group input-group-sm">
                  <button class="btn btn-success ">Add New <i class="fas fa-user-plus"></i></button>
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
                      <th>Modify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td><span class="tag tag-success">Approved</span></td>
                      <td>
                          <a href="#">
                              <i class="fa fa-edit text-blue"></i>
                          </a>
                            /
                          <a href="#">
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
        

        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
