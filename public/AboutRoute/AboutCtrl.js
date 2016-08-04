angular.module("salono").controller("AboutCtrl", ["$scope", "AboutSvc", function($scope, AboutSvc){

	$scope.Options = [
        {
            name: "Our Vision",
            info: "We strive to create a warm environment where our inspiration and talent can thrive. Our focus is to deliver a finished product matched specific to each guest’s own uniqueness.",
            info2: "Traditional feel. Contemporary product."
        },
        {
            name: "Policies",
            info: "Forms of payments accepted are cash, checks and credit cards (VISA, MasterCard, Discover, American Express, and Debit Cards). We do not accept personal checks for first time guests. Please note that a deposit may be required at the time of booking. All prices are subject to change at the discretion of salon management and/or stylists. All prices and services vary by stylist. Cancellation of appointments must be made 24 hours prior to the scheduled time to avoid cancellation fees. For same day appointments, a three-hour cancellation notice is required. Please note a 72-hour cancellation notice is required for extension and retexturizing services. Failure to follow the salon’s cancellation policies will result in a forfeiture of deposit. Salon O does not offer a refund on services or product. If a guest is dissatisfied with their service we offer a complimentary adjustment if scheduled within seven days of the original appointment. If a guest is dissatisfied with a product we will gladly exchange it within 30 days. Salon O is not responsible for any damaged clothing, please dress accordingly. Please be courteous to other salon guests and stylists by not bringing children or additional guests."
        }];
    
    $scope.selected = $scope.Options[0];
    
    $scope.selectOption = function(item) {
        $scope.selected = item;
    }

}]);
