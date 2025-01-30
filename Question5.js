// Q5. You are building a shipping application. Write a program that takes the type of package ("standard",
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
// "overnight" would be delivered the next day.

function getDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "Estimated delivery: 3-5 days";
            break;
        case "express":
            deliveryTime = "Estimated delivery: 1-2 days";
            break;
        case "overnight":
            deliveryTime = "Estimated delivery: Next day";
            break;
        default:
            deliveryTime = "Invalid package type. Please choose 'standard', 'express', or 'overnight'.";
    }

    console.log(deliveryTime);
}

// Example
getDeliveryTime("express");
