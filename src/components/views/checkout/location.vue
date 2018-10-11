<template>
    <div>
         <div class="modal fade modal-danger" id="beforeInvoice" aria-hidden="true"
                      aria-labelledby="exampleModalDanger" role="dialog" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title">Please Confirm Your Current Location</h4>
                          </div>
                          <div class="modal-body">
                            <form>
                              <div class="row">
                                <div class="form-group col-md-12">
                                 <select class="form-control" placeholder="Select a State">
                                   <option value="">Accra</option>
                                 </select>
                                </div>
                               
                              </div>
                              <div class="col-md-12">
                                <textarea class="form-control" placeholder="Directions to House"></textarea>
                              </div>
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" id="test2" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" @click.prevent="test()" class="btn btn-primary">Save changes & Proceed</button>
                          </div>
                        </div>
                      </div>
        </div>
                <!-- End Example Fill In -->
    </div>
</template>
<script>
    export default{
        methods:{
            test(){
                $("#test2").click()
                this.$router.push('/invoice')
            }
        }
    }
</script>