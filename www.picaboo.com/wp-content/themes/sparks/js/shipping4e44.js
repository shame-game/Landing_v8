jQuery(document).ready(function() {
    checkForm();
});

var shipping_service = host_name + '/Server/Services/WWWShipping.aspx';
var tbl = jQuery('.pricing-table');
var footnote = jQuery('.footnote');
var footnote1 = "NOTE: A 3.0% surcharge will be applied to the product subtotal on all orders shipping to destinations outside of the United States. The international surcharge covers the additional costs associated with producing and shipping products to international destinations."
var frm = jQuery('#sipping-calc-form');
var country;
var state = "CA";
var product;
var productGroups = new Array();
var groupname;
var productname;
var productCounter = 0;
var productlabel1;
var productlabel2;

jQuery('#country').change(function() {
    checkForm();
});
jQuery('#producttype').change(function() {
    checkForm();
});


function checkForm() {
    country = jQuery('#country').val();
    product = jQuery('#producttype').val();
    groupname = "";
    productname = "";
    productCounter = 0;
    productGroups.length = 0;
    tbl.html("")
    if (country == "UST") {
        country = "US";
        state = "HI";
        checkProduct();
    } else if (country == "CA") {
        state = "AB";
        footnote.html(footnote1);
        checkProduct();
    } else if (country == "other") {
        country = "FR";
        state = "*";
        footnote.html(footnote1);
        checkProduct();
        //tbl.html("<tr><td style='border:0'><h2>For other countries, see Picaboo shopping cart</h2></td></tr>")
    } else {
        state = "CA"
        checkProduct();
    }
}


function checkProduct() {
    switch(product) {
        case "mini":
            productlabel1 = "Book";
            productlabel2 = "Books";
            productGroups[0] = {GroupName:'Premium Mini Photo Books (5 x 4, 5 x 5)',ProductName:'SquareBookSmall'};
            cycleProducts(country, state);
            break;
        case "books":
            productlabel1 = "Book";
            productlabel2 = "Books";
            productGroups[0] = {GroupName:'Premium Mini Photo Books (5 x 4, 5 x 5)',ProductName:'SquareBookSmall'};
            productGroups[1] = {GroupName:'Medium Classic Photo Books (8 x 6, 8 x 8)',ProductName:'CustomCoverMediumBook'};
            productGroups[2] = {GroupName:'Large Classic Photo Books (11 x 9)',ProductName:'CustomCoverLargeBook'};
            productGroups[3] = {GroupName:'Extra Large Classic Photo Books (12 x 12, 14 x 11)',ProductName:'CustomCoverXLargeBook'};
            cycleProducts(country, state);
            break;
        case "prestige":
            productlabel1 = "Book";
            productlabel2 = "Books";
            productGroups[0] = {GroupName:'Madison Photo Books (11 x 9)',ProductName:'Flexbind'};
            productGroups[1] = {GroupName:'Square Madison Photo Books (10 x 10)',ProductName:'FlexbindSquare'};
            productGroups[2] = {GroupName:'Large Madison Photo Books (14 x 11)',ProductName:'FlexbindLarge'};
            productGroups[3] = {GroupName:'Large Square Madison Photo Books (12 x 12)',ProductName:'FlexbindSquareLarge'};
            productGroups[4] = {GroupName:'Flush Mount Photo Books (11 x 9)',ProductName:'FlushMount'};
            productGroups[5] = {GroupName:'Square Flush Mount Photo Books (10 x 10)',ProductName:'FlushmountSquare'};
            productGroups[6] = {GroupName:'Large Flush Mount Photo Books (14 x 11)',ProductName:'FlushMountX'};
            productGroups[7] = {GroupName:'Large Square Flush Mount Photo Books (12 x 12)',ProductName:'FlushMountX'};
            cycleProducts(country, state);
            break;
        case "seamless":
            productlabel1 = "Book";
            productlabel2 = "Books";
            productGroups[0] = {GroupName:'Premium Mini Photo Books (5 x 4, 5 x 5)',ProductName:'CustomCoverMiniBookSL'};
            productGroups[1] = {GroupName:'Medium Seamless Lay-Flat Photo Books (8 x 8)',ProductName:'SquareBookMediumSL'};
            productGroups[2] = {GroupName:'Large Seamless Lay-Flat Photo Books (11 x 9)',ProductName:'CustomCoverLargeBookSL'};
            productGroups[3] = {GroupName:'Extra Large Seamless Lay-Flat Photo Books (12 x 12, 14 x 11)',ProductName:'SquareBookXLargeSL'};
            cycleProducts(country, state);
            break;
        case "calendars":
            productlabel1 = "Calendar";
            productlabel2 = "Calendars";
            productGroups[0] = {GroupName:'11 x 9 Calendars',ProductName:'CalendarLarge'};
            productGroups[1] = {GroupName:'14 x 11 Calendars',ProductName:'CalendarXLarge'};
            cycleProducts(country, state);
            break;
        case "canvas":
            productlabel1 = "Canvas";
            productlabel2 = "Canvas";
            productGroups[0] = {GroupName:'14 x 11 Canvas',ProductName:'Canvas11x14'};
            productGroups[1] = {GroupName:'24 x 16 Canvas',ProductName:'Canvas16x24'};
            productGroups[2] = {GroupName:'30 x 20 Canvas',ProductName:'Canvas30x20'};
            productGroups[3] = {GroupName:'36 x 24 Canvas',ProductName:'Canvas36x24'};
            cycleProducts(country, state);
            break;
        case "metal":
            productlabel1 = "Metal Print";
            productlabel2 = "Metal Prints";
            productGroups[0] = {GroupName:'7 x 5 Metal Print',ProductName:'MetalPrint7x5'};
            productGroups[1] = {GroupName:'8 x 8 Metal Print',ProductName:'MetalPrint8x8'};
            productGroups[2] = {GroupName:'10 x 8 Metal Print',ProductName:'MetalPrint10x8'};
            productGroups[3] = {GroupName:'12 x 12 Metal Print',ProductName:'MetalPrint12x12'};
            productGroups[4] = {GroupName:'15 x 10 Metal Print',ProductName:'MetalPrint15x10'};
            productGroups[5] = {GroupName:'24 x 16 Metal Print',ProductName:'MetalPrint24x16'};
            productGroups[6] = {GroupName:'30 x 20 Metal Print',ProductName:'MetalPrint30x20'};
            productGroups[7] = {GroupName:'36 x 24 Metal Print',ProductName:'MetalPrint36x24'};
            cycleProducts(country, state);
            break;
        case "panels":
            productlabel1 = "Photo Panel";
            productlabel2 = "Photo Panels";
            productGroups[0] = {GroupName:'7 x 5 Photo Panels',ProductName:'PhotoPanel5x7'};
            productGroups[1] = {GroupName:'10 x 8 Photo Panels',ProductName:'PhotoPanel10x8'};
            productGroups[2] = {GroupName:'14 x 11 Photo Panels',ProductName:'PhotoPanel11x14'};
            cycleProducts(country, state);
            break;
        case "scrapbook":
            productlabel1 = "Scrapbook Page";
            productlabel2 = "Scrapbook Pages";
            productGroups[0] = {GroupName:'8 x 8 Scrapbook Page',ProductName:'SquarePrint8x8'};
            productGroups[1] = {GroupName:'12 x 12 Scrapbook Page',ProductName:'SquarePrint12x12'};
            cycleProducts(country, state);
            break;
        case "pads":
            productlabel1 = "Mouse Pad";
            productlabel2 = "Mouse Pads";
            productGroups[0] = {GroupName:'Mouse Pads',ProductName:'MousePad9x8'};
            cycleProducts(country, state);
            break;
        case "puzzles":
            productlabel1 = "Puzzle";
            productlabel2 = "Puzzles";
            productGroups[0] = {GroupName:'10 x 8 Puzzles',ProductName:'Puzzle10x8'};
            productGroups[1] = {GroupName:'14 x 11 Puzzles',ProductName:'Puzzle14x11'};
            productGroups[2] = {GroupName:'16 x 20 Puzzles',ProductName:'Puzzle16x20'};
            productGroups[3] = {GroupName:'20 x 20 Puzzles',ProductName:'Puzzle20x20'};
            productGroups[4] = {GroupName:'30 x 20 Puzzles',ProductName:'Puzzle30x20'};
            cycleProducts(country, state);
            break;
        case "notebooks":
            productlabel1 = "Notebook";
            productlabel2 = "Notebooks";
            productGroups[0] = {GroupName:'Notebook',ProductName:'Notebook7x9'};
            cycleProducts(country, state);
            break;
        case "journals":
            productlabel1 = "Journal";
            productlabel2 = "Journals";
            productGroups[0] = {GroupName:'Journal',ProductName:'Journal6x8'};
            cycleProducts(country, state);
            break;
        case "ornament":
            productlabel1 = "Ornament";
            productlabel2 = "Ornaments";
            productGroups[0] = {GroupName:'Ornament Benelux',ProductName:'OrnamentBenelux'};
            productGroups[1] = {GroupName:'Ornament Berlin',ProductName:'OrnamentBerlin'};
            productGroups[2] = {GroupName:'Ornament Prague',ProductName:'OrnamentPrague'};
            productGroups[3] = {GroupName:'Ornament London',ProductName:'OrnamentLondon'};
            productGroups[4] = {GroupName:'Ornament Round',ProductName:'OrnamentRound'};
            cycleProducts(country, state);
            break;
        case "coasters":
            productlabel1 = "Coaster";
            productlabel2 = "Coasters";
            productGroups[0] = {GroupName:'Coasters',ProductName:'Coaster'};
            cycleProducts(country, state);
            break;
        case "mug":
            productlabel1 = "Mugs";
            productlabel2 = "Mug";
            productGroups[0] = {GroupName:'Mugs',ProductName:'Mug'};
            cycleProducts(country, state);
            break;
        case "pillows":
            productlabel1 = "Pillow";
            productlabel2 = "Pillows";
            productGroups[0] = {GroupName:'14 x 14 Pillow',ProductName:'Pillow14x14'};
            productGroups[1] = {GroupName:'18 x 18 Pillow',ProductName:'Pillow18x18'};
            productGroups[2] = {GroupName:'26 x 26 Pillow',ProductName:'Pillow26x26'};
            cycleProducts(country, state);
            break;
        case "blankets":
            productlabel1 = "Blanket";
            productlabel2 = "Blankets";
            productGroups[0] = {GroupName:'50 x 60 Blanket',ProductName:'Blanket50x60'};
            productGroups[1] = {GroupName:'60 x 80 Blanket',ProductName:'Blanket60x80'};
            cycleProducts(country, state);
            break;
        case "totes":
            productlabel1 = "Tote";
            productlabel2 = "Totes";
            productGroups[0] = {GroupName:'Weekender Tote',ProductName:'WeekenderTote'};
            cycleProducts(country, state);
            break;
        case "cards":
            productlabel1 = "Card";
            productlabel2 = "Cards";
            productGroups[0] = {GroupName:'Flat Cards',ProductName:'Card5x7LP'};
            productGroups[1] = {GroupName:'Folded Cards',ProductName:'Card5x7LF'};
            cycleProducts(country, state);
            break;
        case "crystal":
            productlabel1 = "Crystal";
            productlabel2 = "Crystals";
            productGroups[0] = {GroupName:'Photo Crystals 8x5x5cm',ProductName:'Crystal8x5'};
            productGroups[1] = {GroupName:'Photo Crystals 9x6x6cm',ProductName:'Crystal6x9'};
            productGroups[2] = {GroupName:'Photo Crystals 12x8x6cm',ProductName:'Crystal12x8'};
            productGroups[3] = {GroupName:'Photo Crystals 18x12x8cm',ProductName:'Crystal18x12'};
            cycleProducts(country, state);
            break;
        case "prints":
            productlabel1 = "Print";
            productlabel2 = "Prints";
            productGroups[0] = {GroupName:'4 x 6 Prints',ProductName:'Prints4x6'};
            productGroups[1] = {GroupName:'5 x 7 Prints',ProductName:'Prints5x7'};
            //productGroups[2] = {GroupName:'11 x 14 Prints',ProductName:'Prints11x14'};
            //productGroups[3] = {GroupName:'16 x 20 Prints',ProductName:'Prints16x20'};
            cycleProducts(country, state);
            break;
        case "collage":
            productlabel1 = "Collage Print";
            productlabel2 = "Collage Prints";
            productGroups[0] = {GroupName:'8 x 10 Collage Prints',ProductName:'CollagePoster8x10'};
            productGroups[1] = {GroupName:'14 x 11 Collage Prints',ProductName:'CollagePosterSmallPort'};
            //productGroups[2] = {GroupName:'16 x 20 Posters',ProductName:'CollagePosterLargePort'};
            cycleProducts(country, state);
            break;
        case "posters":
            productlabel1 = "Poster";
            productlabel2 = "Posters";
            productGroups[0] = {GroupName:'16 x 24 Posters',ProductName:'PhotoPoster16x24'};
            productGroups[1] = {GroupName:'24 x 16 Posters',ProductName:'PhotoPoster24x16'};
            productGroups[2] = {GroupName:'24 x 36 Posters',ProductName:'PhotoPoster24x36'};
            productGroups[3] = {GroupName:'36 x 24 Posters',ProductName:'PhotoPoster36x24'};
            cycleProducts(country, state);
            break;
        case "cases":
            productlabel1 = "Case";
            productlabel2 = "Cases";
            productGroups[0] = {GroupName:'Phone Cases',ProductName:'Case'};
            //productGroups[1] = {GroupName:'Tablet Cases',ProductName:'Tablet'};
            cycleProducts(country, state);
            break;
    }

}

function cycleProducts(country, state) {
    if (productCounter < productGroups.length) {
        groupname = productGroups[productCounter].GroupName;
        productname = productGroups[productCounter].ProductName;
        getData(country, state, productname, groupname);
        productCounter++;
    } else {
        productCounter = 0;
    }
}

function getData(country, state, product, groupname) {
    jQuery.ajax({
        type: "GET",
        url: shipping_service,
        dataType: 'xml',
        data: 'c='+country+'&s='+state+'&p='+product,
        success: function(data) {

            if (groupname.search(/card/i) >= 0 || groupname.search(/4 x 6 print/i) >= 0 || groupname.search(/5 x 7 print/i) >= 0) {
                console.log(data);

                buildCardTable(data, groupname);
            } else {
                buildTable(data, groupname);
            }

            cycleProducts(country, state);

        },
        error: function(data) {
            alert("Whoa! Something went wrong. Try again.");
        }
    });
}

function buildTable(data, group) {

    var columns = '<tr><th colspan="5"><h2>'+group+'</h2></th></tr><tr><th></th>';

    var result = jQuery.xml2json(data);
    console.log(result);

    var shipping = new Object();
    var shippingmethods = new Array();
    var shippingqty = new Object();

    if (result.State.ShippingGroup.length > 1) {
        for (var i=0;i<result.State.ShippingGroup.length;i++)
        {
            var group = result.State.ShippingGroup[i];
            var method = group.shoppingCartDescription;

            columns = columns + '<th>' + fixMethod(method) + '</th>';
        }
    } else {
        var group = result.State.ShippingGroup;
        var method = group.shoppingCartDescription;

        columns = columns + '<th>' + fixMethod(method) + '</th>';
    }

    columns = columns + '</tr>';

    tbl.append(columns);

    var shippingOptions = new Array();
    shippingOptions[0] = {Option:'Delivered No Later Than &nbsp;&nbsp;&rarr;'};
    shippingOptions[1] = {Option:'Shipping Price (First '+productlabel1+')'};
    shippingOptions[2] = {Option:'Additional '+productlabel1};
    shippingOptions[3] = {Option:'Delivers to P.O. Boxes'};
    shippingOptions[4] = {Option:'Trackable'};

    for (var j=0;j<shippingOptions.length;j++) {

        var currentOption = shippingOptions[j]
        if (j == 0) {
            var row = '<tr style="background: #ddd;"><td style="font-weight:500">' + currentOption.Option + '</td>';
        } else {
            var row = '<tr><td>' + currentOption.Option + '</td>';
        }

        if (result.State.ShippingGroup.length > 1) {
            for (var i=0;i<result.State.ShippingGroup.length;i++)
            {
                group = result.State.ShippingGroup[i];
                method = fixMethod(group.shoppingCartDescription);
                var price = parseFloat(group.ShippingType.Product.ShippingOption.price);
                var increment = parseFloat(group.ShippingType.Product.ShippingOption.increment);
                var delivery = checkDate(group.ShippingType.Product.expectedDate);
                //var delivery = new Date(group.ShippingType.Product.expectedDate);
                var baseQty = group.ShippingType.Product.ShippingOption.baseQuantityUnit;
                if (baseQty > 1) {
                    increment = increment/baseQty;
                }
                if (group.ShippingType.shipToPOBox == 1) {
                    var pobox = "Yes";
                } else if (group.ShippingType.shipToPOBox == 0) {
                    var pobox = "No";
                }

                var deliverComment = group.deliveryComment;
                if (deliverComment.search("Trackable") != -1) {
                    if (deliverComment.search("Non Trackable") != -1) {
                        var trackable = "No";
                    } else {
                        var trackable = "Yes";
                    }
                } else {
                    var trackable = "N/A";
                }



                if (j == 0) {
                    row = row + '<td style="background: #ddd;font-weight:500">' + readWeekDay(delivery.getDay()) + ", " + readMonth(delivery.getMonth()) + " " + delivery.getDate() + '</td>';
                    //currentOption[method] = readWeekDay(delivery.getDay()) + ", " + readMonth(delivery.getMonth()) + " " + delivery.getDate();
                } else if (j == 1) {
                    row = row + '<td>$' + price.toFixed(2) + '</td>';
                    //currentOption[method] = price.toFixed(2);
                } else if (j == 2) {
                    row = row + '<td>$' + increment.toFixed(2) + '</td>';
                    //currentOption[method] = increment.toFixed(2);
                } else if (j == 3) {
                    row = row + '<td>' + pobox + '</td>';
                } else if (j == 4) {
                    row = row + '<td>' + trackable + '</td>';
                }

            }
        } else {
            group = result.State.ShippingGroup;
            method = fixMethod(group.shoppingCartDescription);
            var price = parseFloat(group.ShippingType.Product.ShippingOption.price);
            var increment = parseFloat(group.ShippingType.Product.ShippingOption.increment);
            var delivery = checkDate(group.ShippingType.Product.expectedDate);
            var baseQty = group.ShippingType.Product.ShippingOption.baseQuantityUnit;
            if (baseQty > 1) {
                increment = increment/baseQty;
            }
            if (group.ShippingType.shipToPOBox == 1) {
                var pobox = "Yes";
            } else if (group.ShippingType.shipToPOBox == 0) {
                var pobox = "No";
            }

            var deliverComment = group.deliveryComment;
            if (deliverComment.search("Trackable") != -1) {
                if (deliverComment.search("Non Trackable") != -1) {
                    var trackable = "No";
                } else {
                    var trackable = "Yes";
                }
            } else {
                var trackable = "N/A";
            }

            if (j == 0) {
                row = row + '<td style="background: #ddd;font-weight:500">' + readWeekDay(delivery.getDay()) + ", " + readMonth(delivery.getMonth()) + " " + delivery.getDate() + '</td>';
                //currentOption[method] = readWeekDay(delivery.getDay()) + ", " + readMonth(delivery.getMonth()) + " " + delivery.getDate();
            } else if (j == 1) {
                row = row + '<td>$' + price.toFixed(2) + '</td>';
                //currentOption[method] = price.toFixed(2);
            } else if (j == 2) {
                row = row + '<td>$' + increment.toFixed(2) + '</td>';
                //currentOption[method] = increment.toFixed(2);
            } else if (j == 3) {
                row = row + '<td>' + pobox + '</td>';
            } else if (j == 4) {
                row = row + '<td>' + trackable + '</td>';
            }
        }
        row = row + '</tr>';

        tbl.append(row)

    }

    tbl.append('<tr><td colspan="'+parseInt(result.State.ShippingGroup.length+1)+'" height="30"></td></tr>')



}






function buildCardTable(data, groupname) {
    var result = jQuery.xml2json(data);



    var shipping = new Object();
    var shippingmethods = new Array();
    var shippingqty = new Object();

    for (var i=0;i<result.State.ShippingGroup.length;i++)
    {
        var group = result.State.ShippingGroup[i];
        var method = group.shoppingCartDescription;

        shipping[method] = new Object();
        shippingmethods[i] = method;

        if (group.ShippingType.Product.ShippingOption.length > 1) {
            for (var j=0;j<group.ShippingType.Product.ShippingOption.length;j++)
            {
                var subgroup = group.ShippingType.Product.ShippingOption[j];
                var qty = subgroup.quantity;
                var price = subgroup.price;
                var baseQty = subgroup.baseQuantityUnit;
                var increment = subgroup.increment;
                var baseQty2 = 0;

                if (baseQty > 1) {
                    for (var q=0;baseQty2<700;q++) {
                        if (q==0) {
                            shipping[method][baseQty] = price
                            shippingqty[baseQty] = 1;
                        } else {
                            baseQty2 = parseInt(baseQty) + parseInt(baseQty*q);
                            shipping[method][baseQty2] = parseFloat(price) + ((increment/baseQty)*q) ;
                            shippingqty[baseQty2] = 1;
                        }
                    }
                } else {
                    shipping[method][qty] = price
                    shippingqty[qty] = 1;
                }

            }
        } else {
            var subgroup = group.ShippingType.Product.ShippingOption;
            var qty = subgroup.quantity;
            var price = subgroup.price;
            var baseQty = subgroup.baseQuantityUnit;
            var increment = subgroup.increment;
            var baseQty2 = 0;

            if (baseQty > 1) {
                for (var q=0;baseQty2<700;q++) {
                    if (q==0) {
                        shipping[method][baseQty] = price
                        shippingqty[baseQty] = 1;
                    } else {
                        baseQty2 = parseInt(baseQty) + parseInt(baseQty*q);
                        shipping[method][baseQty2] = parseFloat(price) + ((increment/baseQty)*q) ;
                        shippingqty[baseQty2] = 1;
                    }
                }
            } else {
                shipping[method][qty] = price
                shippingqty[qty] = 1;
            }
        }



    }


    //columns
    var columns = '<tr><th colspan="5"><h2>'+groupname+'</h2></th></tr><tr><th></th>';

    for (var i=0;i<shippingmethods.length;i++) {
        columns = columns + '<th>' + fixMethod(shippingmethods[i]) + '</th>';
    }

    columns = columns + '</tr>';

    tbl.append(columns);


    //estimated delivery
    columns = '<tr style="background: #ddd;"><td style="font-weight:500">Delivered No Later Than &nbsp;&nbsp;&rarr;</td>';

    for (var i=0;i<result.State.ShippingGroup.length;i++) {
        var group = result.State.ShippingGroup[i];
        var delivery = checkDate(group.ShippingType.Product.expectedDate);
        columns = columns + '<td style="font-weight:500">' + readWeekDay(delivery.getDay()) + ", " + readMonth(delivery.getMonth()) + " " + delivery.getDate() + '</th>';
    }

    columns = columns + '</tr>';

    tbl.append(columns);

    //ships to po box
    columns = '<tr><td>Delivers to P.O. Boxes</td>';

    for (var i=0;i<result.State.ShippingGroup.length;i++) {
        var group = result.State.ShippingGroup[i];
        if (group.ShippingType.shipToPOBox == 1) {
            var pobox = "Yes";
        } else if (group.ShippingType.shipToPOBox == 0) {
            var pobox = "No";
        }
        columns = columns + '<td>' + pobox + '</th>';
    }

    columns = columns + '</tr>';

    tbl.append(columns);

    //trackable
    columns = '<tr><td>Trackable</td>';

    for (var i=0;i<result.State.ShippingGroup.length;i++) {
        var group = result.State.ShippingGroup[i];
        var deliverComment = group.deliveryComment;
        if (deliverComment.search("Trackable") != -1) {
            if (deliverComment.search("Non Trackable") != -1) {
                var trackable = "No";
            } else {
                var trackable = "Yes";
            }
        } else {
            var trackable = "N/A";
        }

        columns = columns + '<td>' + trackable + '</th>';
    }

    columns = columns + '</tr>';

    tbl.append(columns);

    //quantity
    columns = '<tr><td colspan="'+parseInt(result.State.ShippingGroup.length+1)+'"></td></tr><tr><th>Quantity</th>';

    for (var i=0;i<shippingmethods.length;i++) {
        columns = columns + '<th>' + fixMethod(shippingmethods[i]) + '</th>';
    }

    columns = columns + '</tr>';

    tbl.append(columns);

    var prevQty = 1
    var i = 0;
    for (var qty in shippingqty) {
        var row = '<tr>';
        if (qty=='9999') {
            row = row + '<td>1000+</td>';
        } else {
            row = row + '<td>' + qty + '</td>';
        }

        for (var i=0;i<shippingmethods.length;i++) {
            var method = shippingmethods[i];
            var price = parseFloat(shipping[method][qty]);
            if (isNaN(price)) {
                row = row + '<td></td>';
            } else {
                row = row + '<td>$' + price.toFixed(2) + '</td>';
            }

        }

        row = row + '</tr>';

        tbl.append(row);
    }

    tbl.append('<tr><td colspan="'+parseInt(result.State.ShippingGroup.length+1)+'" height="30"></td></tr>')

}


function fixMethod(method) {
    if (method.search(/economy/i) >= 0) {
        return "Economy";
    } else if (method.search(/expedited/i) >= 0) {
        return "Expedited";
    } else if (method.search(/express/i) >= 0) {
        return "Express";
    } else if (method.search(/Priority$/) >= 0) {
        return "Priority";
    } else {
        return method;
    }
}

function readWeekDay(d) {
    switch(d) {
        case 0:
            return "Sun";
            break;
        case 1:
            return "Mon";
            break;
        case 2:
            return "Tue";
            break;
        case 3:
            return "Wed";
            break;
        case 4:
            return "Thu";
            break;
        case 5:
            return "Fri";
            break;
        case 6:
            return "Sat";
            break;
    }
}

function readMonth(m) {
    switch(m) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
    }
}

function checkDate(d) {
    var dd = new Date(d);
    return dd;
    // if (isPastCutOff()) {
    //     var newDate = new Date(dd-1);
    //     return newDate;
    // } else {
    //     return dd;
    // }

}

function isPastCutOff() {
    var currentTime = new Date();
    var toUTC = new Date(currentTime.toUTCString());
    var currentHour = toUTC.getUTCHours();
    if (currentHour > 20) {
        return true;

    }

}

$(document).ready(function(){
    $('#country').on('change', function() {
        if ( this.value == 'other' && $("#producttype").val() == "cases" )
        {
            $("#cases").show();
        }
        else {
            $("#cases").hide();
        }
    });

    $('#producttype').on('change', function() {
        if ( this.value == 'cases' && $("#country").val() == "other" )
        {
            $("#cases").show();
        }
        else {
            $("#cases").hide();
        }
    });
});


/*jQuery('#sipping-calc-form').submit(function(event) {
 var frm = jQuery(this);
 var product = jQuery('#product-type');
 var state = jQuery('#state');
 var country = jQuery('#country');
 jQuery.ajax({
 type: frm.attr('method'),
 url: frm.attr('action'),
 dataType: 'xml',
 data: frm.serialize(),
 success: function(data) {
 if (state.val() == "HI") {
 country.val("UST");
 }
 var selected = jQuery('option:selected', product).attr('product-type');
 if ((selected == "Posters" && state.val() == "HI") || (selected == "Posters" && state.val() == "AB")) {
 buildCardTable(data, selected);
 } else if (selected == "Books" || selected == "Calendars" || selected == "Canvas" || selected == "Panels" || selected == "Posters") {
 buildTable(data, selected);
 } else if (selected == "Cards" || selected == "Prints") {
 buildCardTable(data, selected);
 }


 },
 error: function(data) {
 alert("Whoa! Something went wrong. Try again.");
 }
 });
 event.preventDefault();
 });*/