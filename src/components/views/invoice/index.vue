<template>
    <div>
         <div class="page">
      <div class="page-header">
        <h1 class="page-title">Invoice</h1>
      </div>

      <div class="page-content">
        <!-- Panel -->
        <div class="panel">
          <div class="panel-body container-fluid">
            <div class="row">
              <div class="col-lg-3">
                <h3>
                  <img class="mr-10" width="100px" height="100px" src="/static/assets/images/logo.jpg"
                    alt="...">A1 bread</h3>
                <address>
                  795 Folsom Ave, Suite 600
                  <br> San Francisco, CA, 94107
                  <br>
                  <abbr title="Mail">E-mail:</abbr>&nbsp;&nbsp;example@google.com
                  <br>
                  <abbr title="Phone">Phone:</abbr>&nbsp;&nbsp;(123) 456-7890
                  <br>
                  <abbr title="Fax">Fax:</abbr>&nbsp;&nbsp;800-692-7753
                </address>
              </div>
              <div class="col-lg-3 offset-lg-6 text-right">
                <h4>Invoice Info</h4>
                <p>
                  <a class="font-size-20" href="javascript:void(0)">#5669626</a>
                  <br> To:
                  <br>
                  <span class="font-size-20">{{this.$store.state.authStore.authUser.name}}</span><br>
                  <span class="font-size-20">{{this.$store.state.authStore.authUser.email}}</span>

                </p>
                <address>
                  795 Folsom Ave, Suite 600
                  <br> San Francisco, CA, 94107
                  <br>
                  <abbr title="Phone">P:</abbr>&nbsp;&nbsp;(123) 456-7890
                  <br>
                </address>
                <span>Invoice Date: January 20, 2017</span>
                <br>
                <span>Due Date: January 22, 2017</span>
              </div>
            </div>

            <div class="page-invoice-table table-responsive">
              <table class="table table-hover text-right">
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th>Name</th>
                    <th class="text-right">Quantity</th>
                    <th class="text-right">Unit Cost</th>
                    <th class="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                 <tr v-for="invoices in invoiceProduct">
                   <td> {{invoices.id}}</td>
                    <td>
                      <h5>{{invoices.name}}</h5>
                    </td>
                    <td>
                         
                       <span class="col-xs-1">
                             <input type="text" readonly class="btn btn-floating btn-xs form-control" v-model="invoices.qty"> 
                       </span>
                       
                    </td>
                    <td>{{invoices.price}}</td>
                    <td>{{invoices.price * invoices.qty }}</td>
                 </tr>
                </tbody>
              </table>
            </div>

            <div class="text-right clearfix">
              <div class="float-right">
                <p>Sub - Total amount:
                  <span>{{subTotal}}</span>
                </p>
                <p>VAT:
                  <span>0</span>
                </p>
                <p class="page-invoice-amount">Grand Total:
                  <span>{{total}}</span>
                </p>
              </div>
            </div>

            <div class="text-right">
              <button type="submit" class="btn btn-animate btn-animate-side btn-primary">
                <span><i class="icon wb-shopping-cart" aria-hidden="true"></i> Proceed
                  to payment</span>
              </button>
              <button type="button" class="btn btn-animate btn-animate-side btn-default btn-outline"
                onclick="javascript:window.print();">
                <span><i class="icon wb-print" aria-hidden="true"></i> Print</span>
              </button>
            </div>
          </div>
        </div>
        <!-- End Panel -->
      </div>
    </div>
    <!-- End Page -->
    </div>
</template>
<script>
export default{
  data(){
    return{
      invoiceProducts:{}
    }
  },
  computed:{
          invoiceProduct(){
            return this.invoiceProducts= this.$store.state.cartStore.cartItems
          },
           total() {
    	    return _.sumBy(this.$store.state.cartStore.cartItems, function(o) {return o.price * o.qty;})
          },
          subTotal() {
    	    return _.sumBy(this.$store.state.cartStore.cartItems, function(o) {return o.price * o.qty;})
          },
   
  },
}
</script>