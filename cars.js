function StaffMember(name, discountPercent) { this.name = name; this.discountPercent = discountPercent;	}
var me = new StaffMember("Random", 18);
console.log(me);

 var cashRegister = {
 	"total": 0,
 	"lastTransactionAmount": 0,
 	"numItems": 0,
 	//adding items
 	"add": function(itemCost) { this.total += itemCost; this.lastTransactionAmount = itemCost; /*this.numItems += quantity;*/},
 	//scanning items
 	"scan": function(item, quantity) {
 		switch(item) {
 			case "camaro": this.add(26305 * quantity); break;
 			case "mustang": this.add(24915 * quantity); break;
 			case "f150": this.add(26540 * quantity); break;
 			case "silverado": this.add(27195 * quantity); break;
 		}
 	},
 	//void last transaction
 	"voidLastTransaction": function() {	this.total -= this.lastTransactionAmount; },
 	// apply discount
 	"applyStaffDiscount": function(employee) { this.total *= ((100 - employee.discountPercent)/100) }
 }

 function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showTotal() {
	document.getElementById('total').innerHTML = "Your total is: $"+ numberWithCommas(cashRegister.total.toFixed(2));
}
