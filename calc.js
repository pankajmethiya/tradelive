// JavaScript Document
/**
 * Created by MohanRaj Sengodan@mohanquiet on 06/08/14.
 */
function fnIndra()
{
	 buy = document.getElementById("eq_indra_buy").value;
	sell = document.getElementById("eq_indra_sell").value;
	  qty = document.getElementById("eq_indra_qty").value;
	  eq_indra_broker = document.getElementById("eq_indra_broker").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("eq_indra_buy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("eq_indra_sell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("eq_indra_qty").value); }
	if(eq_indra_broker == ""){ eq_indra_broker =0; }else{ eq_indra_broker = parseFloat(document.getElementById("eq_indra_broker").value); }
	eq_indra_turn = (buy*qty)+(sell*qty);
	brokerProfit =eq_indra_turn * (parseFloat(eq_indra_broker)/100);
		buytr = buy*qty;
		selltr = sell*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_sub = (sell*qty)*(0.025/100);
	eq_indra_tot_tran = eq_indra_turn*(0.003/100);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(12.00/100);
	eq_indra_edu_cess = eq_indra_service*(2/100);
	eq_indra_high_edu_cess = eq_indra_service*(1/100);
	eq_indra_sebi = eq_indra_turn*(0.0002/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_sub+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi;
	
	document.getElementById('eq_indra_turn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('eq_indra_brokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('eq_indra_sub').innerHTML=eq_indra_sub.toFixed(2);
	document.getElementById('eq_indra_tot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('eq_indra_service').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('eq_indra_edu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('eq_indra_sebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('eq_indra_high_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('eq_indra_total_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	if(brokerProfit>0)
		{
		document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";
		}else{
			document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('eq_indraProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('eq_indraProfit').className="calc_footer";
			}else if(red < 0){
			document.getElementById('eq_indraProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('eq_indraProfit').className="calc_rfooter";
			if(brokerProfit>=0)
		{ document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none"; }
				}else{
			document.getElementById('eq_indraProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('eq_indraProfit').className="calc_gfooter";
					}
}
function fnDelivery()
{
	
	
	 buy = document.getElementById("eq_delivery_buy").value;
	 sell = document.getElementById("eq_delivery_sell").value;
	  qty = document.getElementById("eq_delivery_qty").value;
	  eq_delivery_broker = document.getElementById("eq_delivery_broker").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("eq_delivery_buy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("eq_delivery_sell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("eq_delivery_qty").value); }
	if(eq_delivery_broker == ""){ eq_delivery_broker =0; }else{ eq_delivery_broker = parseFloat(document.getElementById("eq_delivery_broker").value); }
	eq_indra_turn = (buy*qty)+(sell*qty);
	brokerProfit =eq_indra_turn * (parseFloat(eq_delivery_broker)/100);
		buytr = buy*qty;
		selltr = sell*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_sub = (buy+sell)*(qty*(0.100/100));
	eq_indra_tot_tran = eq_indra_turn*(0.003/100);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(12.00/100);
	eq_indra_edu_cess = eq_indra_service*(2/100);
	eq_indra_high_edu_cess = eq_indra_service*(1/100);
	eq_indra_sebi = eq_indra_turn*(0.0002/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_sub+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi;
	document.getElementById('eq_delivery_turn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('eq_delivery_brokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('eq_delivery_sub').innerHTML=eq_indra_sub.toFixed(2);
	document.getElementById('eq_delivery_tot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('eq_delivery_service').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('eq_delivery_edu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('eq_delivery_sebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('eq_delivery_high_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('eq_delivery_total_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	
	if(brokerProfit>0)
		{
		document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";
		}else{
			document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('eq_deliveryProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('eq_deliveryProfit').className="calc_footer";
			}else if(red < 0){
			document.getElementById('eq_deliveryProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('eq_deliveryProfit').className="calc_rfooter";
			if(brokerProfit>=0)
		{ document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none"; }
				}else{
			document.getElementById('eq_deliveryProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('eq_deliveryProfit').className="calc_gfooter";
					}
	
}

function fnFutures()
{
	 lotsize = document.getElementById("eq_futures_lotsize").value;
	 buy = document.getElementById("eq_futures_buy").value;
	 sell = document.getElementById("eq_futures_sell").value;
	  qty = document.getElementById("eq_futures_qty").value;
	  eq_futures_broker = document.getElementById("eq_futures_broker").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("eq_futures_buy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("eq_futures_sell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("eq_futures_qty").value); }
	if(lotsize == ""){ lotsize =0; }else{ lotsize = parseFloat(document.getElementById("eq_futures_lotsize").value); }
	if(eq_futures_broker == ""){ eq_futures_broker =0; }else{ eq_futures_broker = parseFloat(document.getElementById("eq_futures_broker").value); }
	//eq_indra_turn = (buy*qty)+(sell*qty);
	eq_indra_turn = (buy*qty*lotsize)+(sell*qty*lotsize);
	brokerProfit =eq_indra_turn * (parseFloat(eq_futures_broker)/100);
		buytr = (buy*lotsize)*qty;
		selltr = (sell*lotsize)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_sub = selltr*(0.01/100);
	eq_indra_tot_tran = eq_indra_turn*(0.003/100);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(12.00/100);
	eq_indra_edu_cess = eq_indra_service*(2/100);
	eq_indra_high_edu_cess = eq_indra_service*(1/100);
	eq_indra_sebi = eq_indra_turn*(0.0002/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_sub+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi;
	document.getElementById('eq_futures_turn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('eq_futures_brokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('eq_futures_sub').innerHTML=eq_indra_sub.toFixed(2);
	document.getElementById('eq_futures_tot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('eq_futures_service').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('eq_futures_edu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('eq_futures_sebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('eq_futures_high_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('eq_futures_total_tax').innerHTML=eq_indra_total_tax.toFixed(2);
		
		
		if(brokerProfit>0)
		{
		document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";
		}else{
			document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('eq_futureProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('eq_futureProfit').className="calc_footer";
			}else if(red < 0){
			document.getElementById('eq_futureProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('eq_futureProfit').className="calc_rfooter";
			if(brokerProfit>=0)
		{ document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none"; }
				}else{
			document.getElementById('eq_futureProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('eq_futureProfit').className="calc_gfooter";
					}
	//	document.getElementById('brokerProfit').innerHTML = "Rs." +brokerProfit.toFixed(2);

}

function fnOptions()
{
	 buy = document.getElementById("eq_options_buy").value;
	 sell = document.getElementById("eq_options_sell").value;
	  qty = document.getElementById("eq_options_qty").value;
	  lotsize = document.getElementById("eq_options_lotsize").value;
	  eq_options_broker = document.getElementById("eq_options_broker").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("eq_options_buy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("eq_options_sell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("eq_options_qty").value); }
	if(lotsize == ""){ lotsize =0; }else{ lotsize = parseFloat(document.getElementById("eq_options_lotsize").value); }
	if(eq_options_broker == ""){ eq_options_broker =0; }else{ eq_options_broker = parseFloat(document.getElementById("eq_options_broker").value); }
	//eq_indra_turn = (buy*qty)+(sell*qty);
	eq_indra_turn = (buy*qty*lotsize)+(sell*qty*lotsize);
	brokerProfit =eq_indra_turn * (parseFloat(eq_options_broker)/100);
		buytr = (buy*lotsize)*qty;
		selltr = (sell*lotsize)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_sub = selltr*(0.017/100);
	eq_indra_tot_tran = eq_indra_turn*(0.0700/100);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(12.00/100);
	eq_indra_edu_cess = eq_indra_service*(2/100);
	eq_indra_high_edu_cess = eq_indra_service*(1/100);
	eq_indra_sebi = eq_indra_turn*(0.0002/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_sub+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi;
	document.getElementById('eq_options_turn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('eq_options_brokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('eq_options_sub').innerHTML=eq_indra_sub.toFixed(2);
	document.getElementById('eq_options_tot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('eq_options_service').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('eq_options_edu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('eq_options_sebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('eq_options_high_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('eq_options_total_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	
		if(brokerProfit>0)
		{
		document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";
		}else{
			document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('eq_optionsProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('eq_optionsProfit').className="calc_footer";
			}else if(red < 0){
			document.getElementById('eq_optionsProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('eq_optionsProfit').className="calc_rfooter";
			if(brokerProfit>=0)
		{ document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none"; }
				}else{
			document.getElementById('eq_optionsProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('eq_optionsProfit').className="calc_gfooter";
					}

}

function fnCurrency()
{
	 buy = document.getElementById("eq_currency_buy").value;
	 sell = document.getElementById("eq_currency_sell").value;
	  qty = document.getElementById("eq_currency_qty").value;
	  eq_currency_lotsize = document.getElementById("eq_currency_lotsize").value;
	  eq_currency_broker = document.getElementById("eq_currency_broker").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("eq_currency_buy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("eq_currency_sell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("eq_currency_qty").value); }
	if(eq_currency_lotsize == ""){ eq_currency_lotsize =0; }else{ eq_currency_lotsize = parseFloat(document.getElementById("eq_currency_lotsize").value); }
	//eq_indra_turn = ((buy*qty)+(sell*qty))*1000;
	eq_indra_turn = ((buy*qty*eq_currency_lotsize)+(sell*qty*eq_currency_lotsize));
	brokerProfit =eq_indra_turn * (parseFloat(eq_currency_broker)/100);
		buytr = (buy*eq_currency_lotsize)*qty;
		selltr = (sell*eq_currency_lotsize)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_tot_tran = eq_indra_turn*(0.000015);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(0.12);
	eq_indra_edu_cess = eq_indra_service*(0.020);
	eq_indra_high_edu_cess = eq_indra_service*(0.010);
	eq_indra_sebi = eq_indra_turn*(0.000002);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi;
	document.getElementById('eq_currency_turn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('eq_currency_brokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('eq_currency_tot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('eq_currency_service').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('eq_currency_edu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('eq_currency_sebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('eq_currency_high_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('eq_currency_total_tax').innerHTML=eq_indra_total_tax.toFixed(2);

		if(brokerProfit>0)
		{
		document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";
		}else{
			document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('eq_currencyProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('eq_currencyProfit').className="calc_footer";
			}else if(red < 0){
			document.getElementById('eq_currencyProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('eq_currencyProfit').className="calc_rfooter";
			if(brokerProfit>=0)
		{ document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";
		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none"; }
				}else{
			document.getElementById('eq_currencyProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('eq_currencyProfit').className="calc_gfooter";
					}

}

function funcCommodity()
{
	 buy = parseFloat(document.getElementById("CommodityBuy").value);
	 sell = parseFloat(document.getElementById("CommoditySell").value);
	  qty = parseFloat(document.getElementById("CommodityQty").value);
	  mega = parseFloat(document.getElementById("CommodityMega").value);
	  CommodityBroker = parseFloat(document.getElementById("CommodityBroker").value);
	  CommodityCM = parseFloat(document.getElementById("CommodityCM").value);
	  CommodityStampduty = parseFloat(document.getElementById("CommodityStampduty").value);
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("CommodityBuy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("CommoditySell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("CommodityQty").value); }
	if(mega == ""){ mega =0; }else{ mega = parseFloat(document.getElementById("CommodityMega").value); }
	if(CommodityBroker == ""){ CommodityBroker =0; }else{ CommodityBroker = parseFloat(document.getElementById("CommodityBroker").value); }
	if(CommodityCM == ""){ CommodityCM =0; }else{ CommodityCM = parseFloat(document.getElementById("CommodityCM").value); }
	if(CommodityStampduty == ""){ CommodityStampduty =0; }else{ CommodityStampduty = parseFloat(document.getElementById("CommodityStampduty").value); }
	//eq_indra_turn = (buy*qty*10)+(sell*qty*10);
	eq_indra_turn = (buy*qty*mega)+(sell*qty*mega);
	brokerProfit =eq_indra_turn * (parseFloat(CommodityBroker)/100);
	CommodityCM_cess =eq_indra_turn * (parseFloat(CommodityCM)/100);
	//CommodityStampduty_cess =eq_indra_turn * (parseFloat(CommodityStampduty)/100);
		buytr = (buy*mega)*qty;
		selltr = (sell*mega)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_tot_tran = eq_indra_turn*(0.000026);
	//console.log(brokerProfit+"/"+eq_indra_tot_tran+"/"+CommodityCM_cess);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran+CommodityCM_cess)*(0.15);
	eq_indra_edu_cess = eq_indra_turn*(0.000002);
//	eq_indra_high_edu_cess = eq_indra_service*(0.010);
	eq_indra_sebi = (sell*mega*qty)*(0.0001);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+parseFloat(eq_indra_brokerage);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_sebi+CommodityCM_cess;//+CommodityStampduty_cess;
	document.getElementById('Commodityturn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('Commoditybrokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('Commoditytot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('Commodityservice').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('CommodityCM_cess').innerHTML=CommodityCM_cess.toFixed(2);
//	document.getElementById('CommodityStampduty_cess').innerHTML=CommodityStampduty_cess.toFixed(2);
	document.getElementById('Commodityedu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('Commoditysebi').innerHTML=eq_indra_sebi.toFixed(2);
//	document.getElementById('Commodityhigh_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('Commoditytotal_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	if(brokerProfit>0)
		{
		/*document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}else{
			/*document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";*/
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('CommodityProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('CommodityProfittd').className="classnormal";
			}else if(red < 0){
			document.getElementById('CommodityProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('CommodityProfittd').className="classred";
			if(brokerProfit>=0)
		{ /*document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}
			}else{
			document.getElementById('CommodityProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('CommodityProfittd').className="classgreen";
			}
}
function funcCurrency()
{
	 buy = document.getElementById("CurrencyBuy").value;
	 sell = document.getElementById("CurrencySell").value;
	  qty = document.getElementById("CurrencyQty").value;
	  mega = document.getElementById("CurrencyMega").value;
	  CurrencyBroker = document.getElementById("CurrencyBroker").value;
	  CurrencyCM = document.getElementById("CurrencyCM").value;
	  CurrencyStampduty = document.getElementById("CurrencyStampduty").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("CurrencyBuy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("CurrencySell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("CurrencyQty").value); }
	if(mega == ""){ mega =0; }else{ mega = parseFloat(document.getElementById("CurrencyMega").value); }
	if(CurrencyBroker == ""){ CurrencyBroker =0; }else{ CurrencyBroker = parseFloat(document.getElementById("CurrencyBroker").value); }
	if(CurrencyCM == ""){ CurrencyCM =0; }else{ CurrencyCM = parseFloat(document.getElementById("CurrencyCM").value); }
	if(CurrencyStampduty == ""){ CurrencyStampduty =0; }else{ CurrencyStampduty = parseFloat(document.getElementById("CurrencyStampduty").value); }
	//eq_indra_turn = (buy*qty*10)+(sell*qty*10);
	eq_indra_turn = (buy*qty*mega)+(sell*qty*mega);
	brokerProfit =eq_indra_turn * (parseFloat(CurrencyBroker)/100);
	//CurrencyCM_cess =eq_indra_turn*(0.0002);
	//CurrencyStampduty_cess =eq_indra_turn * (parseFloat(CurrencyStampduty)/100);
		buytr = (buy*mega)*qty;
		selltr = (sell*mega)*qty;
	eq_indra_brokerage = 20.00;
	eq_indra_tot_tran = eq_indra_turn*(0.000044);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(0.145);
	eq_indra_edu_cess = eq_indra_service*(0.020);
	eq_indra_high_edu_cess = eq_indra_service*(0.010);
	eq_indra_sebi = eq_indra_turn*(0.000002);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+parseFloat(eq_indra_brokerage);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_tot_tran+eq_indra_service+eq_indra_sebi+eq_indra_edu_cess+eq_indra_high_edu_cess;//+CurrencyCM_cess;//+CurrencyStampduty_cess;
	document.getElementById('Currencyturn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('Currencybrokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('Currencytot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('Currencyservice').innerHTML=eq_indra_service.toFixed(2);
	//document.getElementById('CurrencyCM_cess').innerHTML=CurrencyCM_cess.toFixed(2);
//	document.getElementById('CurrencyStampduty_cess').innerHTML=CurrencyStampduty_cess.toFixed(2);
	document.getElementById('Currencyedu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('Currencysebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('Currencyhigh_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('Currencytotal_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	if(brokerProfit>0)
		{
		/*document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}else{
			/*document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";*/
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('CurrencyProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('CurrencyProfittd').className="classnormal";
			}else if(red < 0){
			document.getElementById('CurrencyProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('CurrencyProfittd').className="classred";
			if(brokerProfit>=0)
		{ /*document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}
			}else{
			document.getElementById('CurrencyProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('CurrencyProfittd').className="classgreen";
			}
}
function funcCommodityNewFea()
{
	 buy = document.getElementById("CommodityNewFeaBuy").value;
	 sell = document.getElementById("CommodityNewFeaSell").value;
	  qty = document.getElementById("CommodityNewFeaQty").value;
	  mega = document.getElementById("CommodityNewFeaMega").value;
	  CommodityNewFeaBroker = document.getElementById("CommodityNewFeaBroker").value;
	  CommodityNewFeaCM = document.getElementById("CommodityNewFeaCM").value;
	  CommodityNewFeaStampduty = document.getElementById("CommodityNewFeaStampduty").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("CommodityNewFeaBuy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("CommodityNewFeaSell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("CommodityNewFeaQty").value); }
	if(mega == ""){ mega =0; }else{ mega = parseFloat(document.getElementById("CommodityNewFeaMega").value); }
	if(CommodityNewFeaBroker == ""){ CommodityNewFeaBroker =0; }else{ CommodityNewFeaBroker = parseFloat(document.getElementById("CommodityNewFeaBroker").value); }
	if(CommodityNewFeaCM == ""){ CommodityNewFeaCM =0; }else{ CommodityNewFeaCM = parseFloat(document.getElementById("CommodityNewFeaCM").value); }
	if(CommodityNewFeaStampduty == ""){ CommodityNewFeaStampduty =0; }else{ CommodityNewFeaStampduty = parseFloat(document.getElementById("CommodityNewFeaStampduty").value); }
	//eq_indra_turn = (buy*qty*10)+(sell*qty*10);
	eq_indra_turn = (buy*qty*mega)+(sell*qty*mega);
	brokerProfit =eq_indra_turn * (parseFloat(CommodityNewFeaBroker)/100);
	CommodityNewFeaCM_cess =eq_indra_turn * (parseFloat(CommodityNewFeaCM)/100);
	//CommodityNewFeaStampduty_cess =eq_indra_turn * (parseFloat(CommodityNewFeaStampduty)/100);
		buytr = (buy*mega)*qty;
		selltr = (sell*mega)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_tot_tran = eq_indra_turn*(0.000049);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(0.145);
	eq_indra_edu_cess = eq_indra_service*(0.020);
	eq_indra_high_edu_cess = eq_indra_service*(0.010);
	eq_indra_sebi = (sell*mega*qty)*(0.025/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+parseFloat(eq_indra_brokerage);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi+CommodityNewFeaCM_cess;//+CommodityNewFeaStampduty_cess;
	document.getElementById('CommodityNewFeaturn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('CommodityNewFeabrokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('CommodityNewFeatot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('CommodityNewFeaservice').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('CommodityNewFeaCM_cess').innerHTML=CommodityNewFeaCM_cess.toFixed(2);
	//document.getElementById('CommodityNewFeaStampduty_cess').innerHTML=CommodityNewFeaStampduty_cess.toFixed(2);
	document.getElementById('CommodityNewFeaedu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('CommodityNewFeasebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('CommodityNewFeahigh_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('CommodityNewFeatotal_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	if(brokerProfit>0)
		{
		/*document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}else{
			/*document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";*/
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('CommodityNewFeaProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('CommodityNewFeaProfittd').className="classnormal";
			}else if(red < 0){
			document.getElementById('CommodityNewFeaProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewFeaProfittd').className="classred";
			if(brokerProfit>=0)
		{ /*document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}
			}else{
			document.getElementById('CommodityNewFeaProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewFeaProfittd').className="classgreen";
			}
}
function funcCommodityNewOpt()
{
	 buy = document.getElementById("CommodityNewOptBuy").value;
	 sell = document.getElementById("CommodityNewOptSell").value;
	  qty = document.getElementById("CommodityNewOptQty").value;
	  mega = document.getElementById("CommodityNewOptMega").value;
	  CommodityNewOptBroker = document.getElementById("CommodityNewOptBroker").value;
	  CommodityNewOptCM = document.getElementById("CommodityNewOptCM").value;
	  CommodityNewOptStampduty = document.getElementById("CommodityNewOptStampduty").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("CommodityNewOptBuy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("CommodityNewOptSell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("CommodityNewOptQty").value); }
	if(mega == ""){ mega =0; }else{ mega = parseFloat(document.getElementById("CommodityNewOptMega").value); }
	if(CommodityNewOptBroker == ""){ CommodityNewOptBroker =0; }else{ CommodityNewOptBroker = parseFloat(document.getElementById("CommodityNewOptBroker").value); }
	if(CommodityNewOptCM == ""){ CommodityNewOptCM =0; }else{ CommodityNewOptCM = parseFloat(document.getElementById("CommodityNewOptCM").value); }
	if(CommodityNewOptStampduty == ""){ CommodityNewOptStampduty =0; }else{ CommodityNewOptStampduty = parseFloat(document.getElementById("CommodityNewOptStampduty").value); }
	//eq_indra_turn = (buy*qty*10)+(sell*qty*10);
	eq_indra_turn = (buy*qty*mega)+(sell*qty*mega);
	brokerProfit =40;//eq_indra_turn * (parseFloat(CommodityNewOptBroker)/100);
	CommodityNewOptCM_cess =eq_indra_turn * (parseFloat(CommodityNewOptCM)/100);
	//CommodityNewOptStampduty_cess =eq_indra_turn * (parseFloat(CommodityNewOptStampduty)/100);
		buytr = (buy*mega)*qty;
		selltr = (sell*mega)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_tot_tran = eq_indra_turn*(0.0008);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(0.145);
	eq_indra_edu_cess = eq_indra_service*(0.020);
	eq_indra_high_edu_cess = eq_indra_service*(0.010);
	eq_indra_sebi = (sell*mega*qty)*(0.017/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+parseFloat(eq_indra_brokerage);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi+CommodityNewOptCM_cess;//+CommodityNewOptStampduty_cess;
	document.getElementById('CommodityNewOptturn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('CommodityNewOptbrokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('CommodityNewOpttot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('CommodityNewOptservice').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('CommodityNewOptCM_cess').innerHTML=CommodityNewOptCM_cess.toFixed(2);
	//document.getElementById('CommodityNewOptStampduty_cess').innerHTML=CommodityNewOptStampduty_cess.toFixed(2);
	//document.getElementById('CommodityNewOptedu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('CommodityNewOptsebi').innerHTML=eq_indra_sebi.toFixed(2);
	//document.getElementById('CommodityNewOpthigh_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('CommodityNewOpttotal_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	if(brokerProfit>0)
		{
		/*document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}else{
			/*document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";*/
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('CommodityNewOptProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('CommodityNewOptProfittd').className="classnormal";
			}else if(red < 0){
			document.getElementById('CommodityNewOptProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewOptProfittd').className="classred";
			if(brokerProfit>=0)
		{ /*document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}
			}else{
			document.getElementById('CommodityNewOptProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewOptProfittd').className="classgreen";
			}
}
function funcCommodityNew()
{
	 buy = document.getElementById("CommodityNewBuy").value;
	 sell = document.getElementById("CommodityNewSell").value;
	  qty = document.getElementById("CommodityNewQty").value;
	  mega = document.getElementById("CommodityNewMega").value;
	  CommodityNewBroker = document.getElementById("CommodityNewBroker").value;
	  CommodityNewCM = document.getElementById("CommodityNewCM").value;
	  CommodityNewStampduty = document.getElementById("CommodityNewStampduty").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("CommodityNewBuy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("CommodityNewSell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("CommodityNewQty").value); }
	if(mega == ""){ mega =0; }else{ mega = parseFloat(document.getElementById("CommodityNewMega").value); }
	if(CommodityNewBroker == ""){ CommodityNewBroker =0; }else{ CommodityNewBroker = parseFloat(document.getElementById("CommodityNewBroker").value); }
	if(CommodityNewCM == ""){ CommodityNewCM =0; }else{ CommodityNewCM = parseFloat(document.getElementById("CommodityNewCM").value); }
	if(CommodityNewStampduty == ""){ CommodityNewStampduty =0; }else{ CommodityNewStampduty = parseFloat(document.getElementById("CommodityNewStampduty").value); }
	//eq_indra_turn = (buy*qty*10)+(sell*qty*10);
	eq_indra_turn = (buy*qty*mega)+(sell*qty*mega);
	brokerProfit =40;//eq_indra_turn * (parseFloat(CommodityNewBroker)/100);
	CommodityNewCM_cess =eq_indra_turn * (parseFloat(CommodityNewCM)/100);
	//CommodityNewStampduty_cess =eq_indra_turn * (parseFloat(CommodityNewStampduty)/100);
		buytr = (buy*mega)*qty;
		selltr = (sell*mega)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_tot_tran = eq_indra_turn*(0.000049);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(0.145);
	eq_indra_edu_cess = eq_indra_service*(0.020);
	eq_indra_high_edu_cess = eq_indra_service*(0.010);
	eq_indra_sebi = (sell*mega*qty)*(0.01/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+parseFloat(eq_indra_brokerage);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi+CommodityNewCM_cess;//+CommodityNewStampduty_cess;
	document.getElementById('CommodityNewturn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('CommodityNewbrokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('CommodityNewtot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('CommodityNewservice').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('CommodityNewCM_cess').innerHTML=CommodityNewCM_cess.toFixed(2);
	//document.getElementById('CommodityNewStampduty_cess').innerHTML=CommodityNewStampduty_cess.toFixed(2);
//	document.getElementById('CommodityNewedu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('CommodityNewsebi').innerHTML=eq_indra_sebi.toFixed(2);
//	document.getElementById('CommodityNewhigh_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('CommodityNewtotal_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	if(brokerProfit>0)
		{
		/*document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}else{
			/*document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";*/
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('CommodityNewProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('CommodityNewProfittd').className="classnormal";
			}else if(red < 0){
			document.getElementById('CommodityNewProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewProfittd').className="classred";
			if(brokerProfit>=0)
		{ /*document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}
			}else{
			document.getElementById('CommodityNewProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewProfittd').className="classgreen";
			}
}
function funcCommodityNewDel()
{
	 buy = document.getElementById("CommodityNewDelBuy").value;
	 sell = document.getElementById("CommodityNewDelSell").value;
	  qty = document.getElementById("CommodityNewDelQty").value;
	  mega = document.getElementById("CommodityNewDelMega").value;
	  CommodityNewDelBroker = document.getElementById("CommodityNewDelBroker").value;
	  CommodityNewDelCM = document.getElementById("CommodityNewDelCM").value;
	  CommodityNewDelStampduty = document.getElementById("CommodityNewDelStampduty").value;
	if(buy == ""){ buy =0; }else{ buy = parseFloat(document.getElementById("CommodityNewDelBuy").value); }
	if(sell == ""){ sell =0; }else{ sell = parseFloat(document.getElementById("CommodityNewDelSell").value); }
	if(qty == ""){ qty =0; }else{ qty = parseFloat(document.getElementById("CommodityNewDelQty").value); }
	if(mega == ""){ mega =0; }else{ mega = parseFloat(document.getElementById("CommodityNewDelMega").value); }
	if(CommodityNewDelBroker == ""){ CommodityNewDelBroker =0; }else{ CommodityNewDelBroker = parseFloat(document.getElementById("CommodityNewDelBroker").value); }
	if(CommodityNewDelCM == ""){ CommodityNewDelCM =0; }else{ CommodityNewDelCM = parseFloat(document.getElementById("CommodityNewDelCM").value); }
	if(CommodityNewDelStampduty == ""){ CommodityNewDelStampduty =0; }else{ CommodityNewDelStampduty = parseFloat(document.getElementById("CommodityNewDelStampduty").value); }
	//eq_indra_turn = (buy*qty*10)+(sell*qty*10);
	eq_indra_turn = (buy*qty*mega)+(sell*qty*mega);
	brokerProfit =eq_indra_turn * (parseFloat(CommodityNewDelBroker)/100);
	CommodityNewDelCM_cess =eq_indra_turn * (parseFloat(CommodityNewDelCM)/100);
	//CommodityNewDelStampduty_cess =eq_indra_turn * (parseFloat(CommodityNewDelStampduty)/100);
		buytr = (buy*mega)*qty;
		selltr = (sell*mega)*qty;
	eq_indra_brokerage = 0.00;
	eq_indra_tot_tran = eq_indra_turn*(0.000049);
	eq_indra_service = (brokerProfit+eq_indra_tot_tran)*(0.145);
	eq_indra_edu_cess = eq_indra_service*(0.020);
	eq_indra_high_edu_cess = eq_indra_service*(0.010);
	eq_indra_sebi = (sell*mega*qty)*(0.2/100);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+parseFloat(eq_indra_brokerage);
	//eq_indra_total_tax = eq_indra_sebi+eq_indra_high_edu_cess+eq_indra_edu_cess+eq_indra_service+eq_indra_tot_tran+eq_indra_sub+parseFloat(eq_indra_brokerage);
	eq_indra_total_tax = brokerProfit+eq_indra_tot_tran+eq_indra_service+eq_indra_edu_cess+eq_indra_high_edu_cess+eq_indra_sebi+CommodityNewDelCM_cess;//+CommodityNewDelStampduty_cess;
	document.getElementById('CommodityNewDelturn').innerHTML=eq_indra_turn.toFixed(2);
	document.getElementById('CommodityNewDelbrokerage').innerHTML=brokerProfit.toFixed(2);
	document.getElementById('CommodityNewDeltot_tran').innerHTML=eq_indra_tot_tran.toFixed(2);
	document.getElementById('CommodityNewDelservice').innerHTML=eq_indra_service.toFixed(2);
	document.getElementById('CommodityNewDelCM_cess').innerHTML=CommodityNewDelCM_cess.toFixed(2);
	//document.getElementById('CommodityNewDelStampduty_cess').innerHTML=CommodityNewDelStampduty_cess.toFixed(2);
	document.getElementById('CommodityNewDeledu_cess').innerHTML=eq_indra_edu_cess.toFixed(2);
	document.getElementById('CommodityNewDelsebi').innerHTML=eq_indra_sebi.toFixed(2);
	document.getElementById('CommodityNewDelhigh_edu_cess').innerHTML=eq_indra_high_edu_cess.toFixed(2);
	document.getElementById('CommodityNewDeltotal_tax').innerHTML=eq_indra_total_tax.toFixed(2);
	if(brokerProfit>0)
		{
		/*document.getElementById('brokerProfit').innerHTML = "Oh. no! you lost <br><span style='color:fff; background:red;font-size:1.2em;'>Rs." +brokerProfit.toFixed(0)+"</span> on brokerage<br><a class='btn'  href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>LEARN HOW TO SAVE ON BROKERAGE</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}else{
			/*document.getElementById('brokerProfit').innerHTML = "You are smart trader.<br> You save a lot on brokerage<br>But did you<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="none";
		document.getElementById('charthree').style.display="block";*/
		
		}
			red = (selltr-buytr)-eq_indra_total_tax;
		if(red == 0){
			document.getElementById('CommodityNewDelProfit').innerHTML="You made No Profit / Loss";
			document.getElementById('CommodityNewDelProfittd').className="classnormal";
			}else if(red < 0){
			document.getElementById('CommodityNewDelProfit').innerHTML="You made a Loss of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewDelProfittd').className="classred";
			if(brokerProfit>=0)
		{ /*document.getElementById('brokerProfit').innerHTML = "<bR>You could have minimized your loss<br><a class='btn' href='index.php' style='background:green; font-size:1em; margin-top:0.2em;'>CHECK OUR FREEDOM PLANS</a>";*/
/*		document.getElementById('charone').style.display="none";
		document.getElementById('chartwo').style.display="block";
		document.getElementById('charthree').style.display="none";*/
		}
			}else{
			document.getElementById('CommodityNewDelProfit').innerHTML="You made a Profit of Rs."+red.toFixed(2);
			document.getElementById('CommodityNewDelProfittd').className="classgreen";
			}
}
function changeTable(tbl)
{
	if(tbl == "equity")
	{
		equities = document.getElementById("equities").style.display="block";
		equities = document.getElementById("equities1").style.display="none";
		currency = document.getElementById("currency").style.display="none";
		commodity = document.getElementById("commodity").style.display="none";
		commodity = document.getElementById("fq").style.display="none";
		commodity = document.getElementById("fq1").style.display="none";
	}
	if(tbl == "equity1")
	{
		equities = document.getElementById("equities").style.display="none";
		equities = document.getElementById("equities1").style.display="block";
		currency = document.getElementById("currency").style.display="none";
		commodity = document.getElementById("commodity").style.display="none";
		commodity = document.getElementById("fq").style.display="none";
		commodity = document.getElementById("fq1").style.display="none";
	}
	if(tbl == "commodities")
	{
		equities = document.getElementById("equities").style.display="none";
		equities = document.getElementById("equities1").style.display="none";
		currency = document.getElementById("currency").style.display="none";
		commodity = document.getElementById("commodity").style.display="block";
		commodity = document.getElementById("fq").style.display="none";
		commodity = document.getElementById("fq1").style.display="none";
	}
	if(tbl == "currency")
	{
		equities = document.getElementById("equities").style.display="none";
		equities = document.getElementById("equities1").style.display="none";
		currency = document.getElementById("currency").style.display="block";
		commodity = document.getElementById("commodity").style.display="none";
		commodity = document.getElementById("fq").style.display="none";
		commodity = document.getElementById("fq1").style.display="none";
	}
	if(tbl == "fo")
	{
		equities = document.getElementById("equities").style.display="none";
		equities = document.getElementById("equities1").style.display="none";
		currency = document.getElementById("currency").style.display="none";
		commodity = document.getElementById("commodity").style.display="none";
		commodity = document.getElementById("fq").style.display="block";
		commodity = document.getElementById("fq1").style.display="none";
	}
	if(tbl == "fo1")
	{
		equities = document.getElementById("equities").style.display="none";
		equities = document.getElementById("equities1").style.display="none";
		currency = document.getElementById("currency").style.display="none";
		commodity = document.getElementById("commodity").style.display="none";
		commodity = document.getElementById("fq").style.display="none";
		commodity = document.getElementById("fq1").style.display="block";
	}
}


function validateOneyear()
{
		name	=	$.trim(document.getElementById('name').value);
		mobile	=	$.trim(document.getElementById('mobile').value);
		email	=	$.trim(document.getElementById('email').value);
		state	=	$.trim(document.getElementById('state').value);
		city	=	$.trim(document.getElementById('city').value);
		equity = document.getElementById('equity').checked;
		fo = document.getElementById('fo').checked;
		currency = document.getElementById('currencyone').checked;
		letters_code=$.trim(document.getElementById('6_letters_code').value);
		
		 if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			xmlhttp.onreadystatechange=function()
			  {
			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
				res=xmlhttp.responseText;
			
				}
			  }
			xmlhttp.open("GET","autocomplete.php?type=captcha&letters_code="+letters_code,false);
			xmlhttp.send();
			
			
		if(name==""){ alert("Enter the Name.."); return false; }
	if(mobile==""){ alert("Enter the Mobile No.."); return false; }else{  if(mobile.length !=10){ alert("Enter 10 digit Mobile No.."); return false; } }
	if(email==""){ alert("Enter the Email ID.."); return false; }
	else
	{
		var x=email;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Enter the Valid Email Address");
		  document.getElementById('email').focus();
		  return false;
		  }
	}
		if(state==""){ alert("Select State.."); return false; }
		if(city==""){ alert("Select City.."); return false; }
		if(equity == false && fo == false && currency == false){ alert("Check any one of Segment"); return false; }
		if(letters_code==""){ 
	alert("Type the Code .."); return false; 
	}
	else
	{
				if(res != "")
				{
				alert("The Captcha code does not match!");
				return false;
				}
			
	}
}

function view_cities(id)
{
	if (id=="")
  {
  document.getElementById("span_city").innerHTML='<select name="city" id="city" class="txt"><option value="">Select City</option></select>';
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("span_city").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","autocomplete.php?type=ser&id="+id,true);
xmlhttp.send();
}

function view_email(val)
{/*
	if(val != "ilias.advert@gmail.com")
	{*/
	if (val=="")
  {
 //alert("Enter Email id");
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		res = xmlhttp.responseText;
		if(res != "0"){ alert("This Email id already exists..."); document.getElementById('email').value=""; document.getElementById('email').focus(); }
    }
  }
xmlhttp.open("GET","autocomplete.php?type=email&id="+val,true);
xmlhttp.send();/*
	}*/
}


function view_mobile(val)
{
	if (val=="")
  {
 //alert("Enter Email id");
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		res = xmlhttp.responseText;
		//alert(res);
		if(res != "0"){ alert("This Mobile number already exists..."); document.getElementById('mobile').value=""; document.getElementById('mobile').focus(); }
    }
  }
xmlhttp.open("GET","autocomplete.php?type=mobile&id="+val,true);
xmlhttp.send();
}



function validateLifetime()
{
		name	=	$.trim(document.getElementById('namelife').value);
		mobile	=	$.trim(document.getElementById('mobilelife').value);
		email	=	$.trim(document.getElementById('emaillife').value);
		state	=	$.trim(document.getElementById('statelife').value);
		city	=	$.trim(document.getElementById('citylife').value);
		equity = document.getElementById('equitylife').checked;
		fo = document.getElementById('folife').checked;
		currency = document.getElementById('currencylife').checked;
		life_code=$.trim(document.getElementById('life_letters_code').value);
if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
			  xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
			  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			xmlhttp.onreadystatechange=function()
			  {

			  if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
				res=xmlhttp.responseText;
				
				}
			  }
			xmlhttp.open("GET","autocomplete.php?type=captchalife&letters_code="+life_code,false);
			xmlhttp.send();
			
		if(name==""){ alert("Enter the Name.."); return false; }
	if(mobile==""){ alert("Enter the Mobile No.."); return false; }else{  if(mobile.length !=10){ alert("Enter 10 digit Mobile No.."); return false; } }
	if(email==""){ alert("Enter the Email ID.."); return false; }
	else
	{
		var x=email;
		var atpos=x.indexOf("@");
		var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
		  {
		  alert("Enter the Valid Email Address");
		  document.getElementById('emaillife').focus();
		  return false;
		  }
	}
		if(state==""){ alert("Select State.."); return false; }
		if(city==""){ alert("Select City.."); return false; }
		if(equity == false && fo == false && currency == false){ alert("Check any one of Segment"); return false; }
		if(life_code==""){ 
	alert("Type the Code .."); return false; 
	}
	else
	{
	if(res != "")
				{
				alert("The Captcha Code does not match!");
				return false;
				}		  
	}
	
}

function view_citieslife(id)
{
	if (id=="")
  {
  document.getElementById("span_citylife").innerHTML='<select name="citylife" id="citylife" class="txt"><option value="">Select City</option></select>';
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("span_citylife").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","autocomplete.php?type=ser1&id="+id,true);
xmlhttp.send();
}

function view_emaillife(val)
{/*
	if(val != "ilias.advert@gmail.com")
	{*/
	if (val=="")
  {
 //alert("Enter Email id");
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		res = xmlhttp.responseText;
		if(res != "0"){ alert("This Email id already exists..."); document.getElementById('emaillife').value=""; document.getElementById('emaillife').focus(); }
    }
  }
xmlhttp.open("GET","autocomplete.php?type=emaillife&id="+val,true);
xmlhttp.send();/*
	}*/
}


function view_mobilelife(val)
{
	if (val=="")
  {
 //alert("Enter Email id");
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		res = xmlhttp.responseText;
		if(res != "0"){ alert("This Mobile number already exists..."); document.getElementById('mobilelife').value=""; document.getElementById('mobilelife').focus(); }
    }
  }
xmlhttp.open("GET","autocomplete.php?type=mobilelife&id="+val,true);
xmlhttp.send();
}
$(document).ready(function(){

    var stamp_duty = [
        {
            State: "Andhra Pradesh",
            EQ_Intraday: "0.005% - max Rs. 50",
            EQ_Delivery: "0.005% - max Rs. 50",
            Futures: "0.005% - max Rs. 50",
            Options: "0.005% - max Rs. 50",
            Currencies : "0.005% - max Rs. 50",
            Commodites : "0.005% - max Rs. 50"
        },
		{
            State: "Karnataka",
            EQ_Intraday: "0.003%",
            EQ_Delivery: "0.003%",
            Futures: "0.003%",
            Options: "0.003%",
            Currencies : "0.003%",
            Commodites : "0.003%"
        },
        {
            State: "Kerala",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.001%- upper limit Rs.250"
        },
		
        {
            State: "Tamil Nadu",
            EQ_Intraday: "0.006%",
            EQ_Delivery: "0.006%",
            Futures: "0.006%",
            Options: "0.006%",
            Currencies : "0.006%",
            Commodites : "*30 paisa for every unit of Cotton, Kapas, Pods <br> *10 paisa for every unit of Kilo of Silver, 50 paisa for every unit of Kilo of Gold <br>" +
                "*50 paisa for every unit of 25 Metric tones of Groundnut <br> *Lineseed, Castor Seed, Cotton Seed <br> *For any Yarn,non mineral oil, spices <br>*Hydrosulphide soda: 0.004%" +
                "<br> *No Stamp Duty for Crude Oil and Base Metals"
        },
        {
            State: "Gujarat",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.001%"
        },
        {
            State: "Maharashtra",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.001%"
        },
        {
            State: "Delhi",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.001%"
        },
        {
            State: "Rajasthan",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.0003%"
        },
        {
            State: "Arunachal Pradesh",
            EQ_Intraday: "0.04% - max Rs. 40",
            EQ_Delivery: "0.04% - max Rs. 40",
            Futures: "0.04% - max Rs. 40",
            Options: "0.04% - max Rs. 40",
            Currencies : "0.04% - max Rs. 40",
            Commodites : "0.001%"
        },
        {
            State: "Assam",
            EQ_Intraday: "0.018% - max Rs. 49.50",
            EQ_Delivery: "0.018% - max Rs. 49.50",
            Futures: "0.018% - max Rs. 49.50",
            Options: "0.018% - max Rs. 49.50",
            Currencies : "0.018% - max Rs. 49.50",
            Commodites : "0.018% - max Rs. 49.50"
        },
        {
            State: "Goa, Daman & Diu",
            EQ_Intraday: "0.001% - max Rs.50",
            EQ_Delivery: "0.001% - max Rs.50",
            Futures: "0.001% - max Rs.50",
            Options: "0.001% - max Rs.50",
            Currencies : "0.001% - max Rs.50",
            Commodites : "0.010% - max Rs.50"
        },
        {
            State: "Haryana",
            EQ_Intraday: "0.003% - max Rs. 30",
            EQ_Delivery: "0.003% - max Rs. 30",
            Futures: "0.003% -max Rs. 30",
            Options: "0.003% - max Rs. 30",
            Currencies : "0.003% - max Rs. 30",
            Commodites : "0.004%"
        },
        {
            State: "Himachal Pradesh",
            EQ_Intraday: "0.003% - max Rs. 30",
            EQ_Delivery: "0.003% - max Rs. 30",
            Futures: "0.003% - max Rs. 30",
            Options: "0.003% - max Rs. 30",
            Currencies : "0.003% - max Rs. 30",
            Commodites : "0.001%"
        },
        {
            State: "Meghalaya",
            EQ_Intraday: "0.04% - max Rs. 40",
            EQ_Delivery: "0.04% - max Rs. 40",
            Futures: "0.04% - max Rs. 40",
            Options: "0.04% - max Rs. 40",
            Currencies : "0.04% - max Rs. 40",
            Commodites : "0.001%"
        },
		     {
            State: "Bihar",
            EQ_Intraday: "1.5% - max  Rs. 200",
            EQ_Delivery: "1.5% - max  Rs. 200",
            Futures: "1.5% - max  Rs. 200",
            Options: "1.5% - max  Rs. 200",
            Currencies : "1.5% - max  Rs. 200",
            Commodites : "0.001%"
        },
		{
            State: "Jammu & Kashmir",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.001%"
        },
        {
            State: "Odisha",
            EQ_Intraday: "0.005% - max Rs. 50",
            EQ_Delivery: "0.005% - max Rs. 50",
            Futures: "0.005% - max Rs. 50",
            Options: "0.005% - max Rs. 50",
            Currencies : "0.005% - max Rs. 50",
            Commodites : "0.005% - max Rs. 50"
        },
		 {
            State: "Jharkhand",
            EQ_Intraday: "1.5% - max  Rs. 200",
            EQ_Delivery: "1.5% - max  Rs. 200",
            Futures: "1.5% - max  Rs. 200",
            Options: "1.5% - max  Rs. 200",
            Currencies : "1.5% - max  Rs. 200",
            Commodites : "0.001%"
       
		 },
		 {
            State: "Madhya Pradesh",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.002%  - max  Rs. 200"
        
		 },
		 {
            State: "Chattisgarh",
            EQ_Intraday: "0.01% - max Rs. 50",
            EQ_Delivery: "0.01% - max Rs. 50",
            Futures: "0.01% - max Rs. 50",
            Options: "0.01% - max Rs. 50",
            Currencies : "0.01% - max Rs. 50",
            Commodites : "0.01% - max Rs. 50"
        
		 },
		 {
            State: "Nagaland",
            EQ_Intraday: "0.04% - max Rs. 100",
            EQ_Delivery: "0.04% - max Rs. 100",
            Futures: "0.04% - max Rs. 100",
            Options: "0.04% - max Rs. 100",
            Currencies : "0.001%",
            Commodites : "0.001%"
        
		 },
		 {
            State: "Punjab",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.001%"
        
		 },
		 {
            State: "West Bengal",
            EQ_Intraday: "0.002%",
            EQ_Delivery: "0.010%",
            Futures: "0.002%",
            Options: "0.002%",
            Currencies : "0.002%",
            Commodites : "0.002%"
		 },
		 {
            State: "Uttar Pradesh",
            EQ_Intraday: "0.002% - max Rs. 1000",
            EQ_Delivery: "0.002% - max Rs. 1000",
            Futures: "0.002% - max Rs. 1000",
            Options: "0.002% - max Rs. 1000",
            Currencies : "0.002% - max Rs. 1000",
            Commodites : "0.001%"
        
		 },
		 {
            State: "Uttarakhand",
            EQ_Intraday: "0.002% - max Rs. 1000",
            EQ_Delivery: "0.002% - max Rs. 1000",
            Futures: "0.002% - max Rs. 1000",
            Options: "0.002% - max Rs. 1000",
            Currencies : "0.002% - max Rs. 1000",
            Commodites : "0.001%"
		 },
		 {
            State: "Telengana",
            EQ_Intraday: "0.01% - max Rs. 100",
            EQ_Delivery: "0.01% - max Rs. 100",
            Futures: "0.01% - max Rs. 100",
            Options: "0.01% - max Rs. 100",
            Currencies : "0.01% - max Rs. 100",
            Commodites : "0.050%"
        }];

        $('body').on('change', '#SelectState', function(){
           var state = $(this).val();
            if(state == state){
            for(var i=0;i<stamp_duty.length;i++) {
                    if(stamp_duty[i].State == state){
						$("#eq_intraday").html(stamp_duty[i].EQ_Intraday);
						$("#eq_delivery").html(stamp_duty[i].EQ_Delivery);
						$("#futures").html(stamp_duty[i].Futures);
						$("#options").html(stamp_duty[i].Options);
						$("#currencies").html(stamp_duty[i].Currencies);
						$("#commodities").html(stamp_duty[i].Commodites);
                    }
                }
            }
        });
});
// document.onmousedown=disableclick;
// status="Right Click Disabled";
// function disableclick(event)
// {
  // if(event.button==2)
   // {
     // alert(status);
     // return false;    
   // }
// }