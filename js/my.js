'use strict';
var app=angular.module("app",[]);
app.controller("appController",function($scope){
	
	
	
	
	
	
	
	//$scope.product=JSON.parse('[{"name":"Soft Chocolate Milk", "src":"p1.png","package":[{"amount":"0.5","cost":"40"},{"amount":"1","cost":"65"}]},{"name":"Soft Kesar Pista Milk", "src":"p1.png", "package":[{"amount":"0.5","cost":"80"},{"amount":"1","cost":"150"}]}]');
	$scope.cart=[];
	//$scope.cart=JSON.parse('[{"name":"this is my cahra","quantity":"1","rate":"4","src":"p1.png"}]');
	//alert($scope.cart.length);
	var total=0;
	
	for(var i=0;i<$scope.cart.length;i++){
		total+=($scope.cart[i].quantity*$scope.cart[i].rate);
	}

	$scope.totalcost=total;
	
	$scope.isEmpty = function(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
};

	$scope.functioncart=function(receiveData){
		var flag=true;
		//alert(JSON.stringify(receiveData));
		for(var i=0;i<$scope.cart.length;i++){
			if(receiveData.name==$scope.cart[i].name&&receiveData.amount==$scope.cart[i].amount){
				var x=parseInt(receiveData.quantity);
				var y=parseInt($scope.cart[i].quantity);
				$scope.cart[i].quantity=(x+y).toString();
				//alert(JSON.stringify($scope.cart));
				flag=false;
				//receiveData.quantity="1";
				//receiveData.amount="0.5";
				break;
			}
		}
		if(flag){
			var data=angular.copy(receiveData)
			$scope.cart.push(data);
		
		}
		
		var total=0;
	
	for(var i=0;i<$scope.cart.length;i++){
		total+=($scope.cart[i].quantity*$scope.cart[i].rate);
	}

	$scope.totalcost=total;
	
	//return receiveData;
	}
	
	$scope.clicker=function(){
		 $(".shopping-cart").fadeToggle( "fast");
	}
	
//	$("#cart").on("click", function() {
 //   $(".shopping-cart").fadeToggle( "fast");
	
  //});
	
});