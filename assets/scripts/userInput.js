let list = [];
let homes = 1;
let maxHomes = 5;
createGraphContainer(homes);
getElem(`graphContainer${homes}`).style.minWidth = '95vw'; // Full width when only one home present

// Reset Charts & Badges
function resetValues(num) {
  calculateAnnualIncomeGrowthOverTime(num);
  calculateExpenseGrowthOverTime(num);
  calculateCoC(num);
  calculateCashFlow(num);
  calculatePropertyValueOverTime(num);
  calculateLoanBalanceOverTime(num);
  calculateEquityOverTime(num);
  createTable1Home(num);
  calculateNetYield(num);
}

function addNewHome() {
  getElem(`graphContainer${homes}`).style.minWidth = '50vw'; // Reset width when more than one home present
  if (homes >= maxHomes) {
    getElem("addNewHomeBtn").style.display = "none";
    return;
  }
  homes++;
  createGraphContainer(homes);
  initAddy();
}

// This is the callback function to initialise the address lookup script
// The following implementation is a lazy fix and is only appropriate for an MVP
function initAddy() {
  var addyComplete1 = new AddyComplete(document.getElementById("address1"));
  addyComplete1.fields = {
    address1: document.getElementById("address1"),
    suburb: document.getElementById("suburb1"),
    city: document.getElementById("city1"),
    postcode: document.getElementById("postcode1"),
    territory: document.getElementById("territory1"),
    region: document.getElementById("region1")
  };

  var addyComplete2 = new AddyComplete(document.getElementById("address2"));
  addyComplete2.fields = {
    address1: document.getElementById("address2"),
    suburb: document.getElementById("suburb2"),
    city: document.getElementById("city2"),
    postcode: document.getElementById("postcode2"),
    territory: document.getElementById("territory2"),
    region: document.getElementById("region2")
  };

  var addyComplete3 = new AddyComplete(document.getElementById("address3"));
  addyComplete3.fields = {
    address1: document.getElementById("address3"),
    suburb: document.getElementById("suburb3"),
    city: document.getElementById("city3"),
    postcode: document.getElementById("postcode3"),
    territory: document.getElementById("territory3"),
    region: document.getElementById("region3")
  };

  var addyComplete4 = new AddyComplete(document.getElementById("address4"));
  addyComplete4.fields = {
    address1: document.getElementById("address4"),
    suburb: document.getElementById("suburb4"),
    city: document.getElementById("city4"),
    postcode: document.getElementById("postcode4"),
    territory: document.getElementById("territory4"),
    region: document.getElementById("region4")
  };

  var addyComplete5 = new AddyComplete(document.getElementById("address5"));
  addyComplete5.fields = {
    address1: document.getElementById("address5"),
    suburb: document.getElementById("suburb5"),
    city: document.getElementById("city5"),
    postcode: document.getElementById("postcode5"),
    territory: document.getElementById("territory5"),
    region: document.getElementById("region5")
  };
}

// Returns the HTML element based on its id
function getElem(id) {
  return document.getElementById(id);
}

// Create an entire new Home object and append it to the list
function createGraphContainer(num) {
  let homeButtonString = `<label class="btn active btn-primary" onclick="toggleHome(${num})" href="#graphContainer${num}">
          <input type="radio" name="options" id="option1" autocomplete="off" checked>Home #${num}
        </label>`;
  getElem("homeToggleButton").insertAdjacentHTML('beforeend', homeButtonString);


  let graphContainerString = `<div class="graph-container" id="graphContainer${num}">
              <div class="main-card mb-3 card card-home-details">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 25px">Home ${num}</h5>
                  <form>
                    <table style="width: 100%">
                      <tr>
                        <td class="label">Address</td>
                        <td><input type="text" class="field form-control" id="address${num}" placeholder="Enter an address.." auto-complete></td>
                      </tr>
                      <tr>
                        <td>Suburb</td>
                        <td><input type="text" class="form-control" id="suburb${num}"></td>
                      </tr>
                      <tr>
                        <td>Town/City</td>
                        <td><input type="text" class="form-control" id="city${num}"></td>
                      </tr>
                      <tr>
                        <td>Territory</td>
                        <td><input type="text" class="form-control" id="territory${num}"></td>
                      </tr>
                      <tr>
                        <td>Region</td>
                        <td>
                          <select id="region${num}" class="form-control">
                            <option value="">Select a region</option>
                            <option value="301">Auckland</option>
                            <option value="303">Bay of Plenty</option>
                            <option value="312">Canterbury</option>
                            <option value="304">Gisborne</option>
                            <option value="305">Hawke's Bay</option>
                            <option value="307">Manawatu - Wanganui</option>
                            <option value="310">Marlborough</option>
                            <option value="315">Nelson</option>
                            <option value="300">Northland</option>
                            <option value="313">Otago</option>
                            <option value="314">Southland</option>
                            <option value="306">Taranaki</option>
                            <option value="309">Tasman</option>
                            <option value="302">Waikato</option>
                            <option value="308">Wellington</option>
                            <option value="311">West Coast</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Postcode</td>
                        <td><input type="text" class="form-control" id="postcode${num}"></td>
                      </tr>
                    </table>
                  </form>

                  <div class="row" style="margin-top: 10px">
                    <div class="col-md-6">
                      <div class="position-relative form-group">
                        <label for="Bedrooms" class="">Area Size</label>
                        <input type="text" class="form-control" id="areaSize${num}" placeholder="Enter Area Size in Sq.Ft">
                      </div>
                      <div class="position-relative form-group">
                        <label for="Bedrooms" class="">Floor Size</label>
                        <input type="text" class="form-control" id="floorSize${num}" placeholder="Enter Floor Size in Sq.Ft">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="position-relative form-group"><label for="Bedrooms${num}" class="">Bedrooms</label><select
                          type="select" id="Bedrooms${num}" name="customSelect" class="custom-select">
                        <option value="">Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                      </select></div>
                      <div class="position-relative form-group"><label for="Bathrooms${num}" class="">Bathrooms</label><select
                          type="select" id="Bathrooms${num}" name="customSelect" class="custom-select">
                        <option value="">Select</option>
                        <option>1/2</option>
                        <option>1</option>
                        <option>1 1/2</option>
                        <option>2</option>
                        <option>2 1/2</option>
                        <option>3+</option>
                      </select></div>
                    </div>
                    <div class="col-md-6">
                      <div class="position-relative form-group"><label for="Garages${num}" class="">Garages</label>
                        <select
                          type="select" id="Garages" name="customSelect${num}" class="custom-select">
                        <option value="">Select</option>
                        <option>1/2</option>
                        <option>1</option>
                        <option>1 1/2</option>
                        <option>2</option>
                        <option>2 1/2</option>
                        <option>3+</option>
                      </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="position-relative form-group" style="padding-top:32px">
                        <button type="button" class="btn-shadow mr-3 btn btn-success">
                          <i style="margin-right: 6px" class="fa fa-check"></i><div class="widget-subheading" style="display: inline-block">Healthy Home Certified</div>
                        </button>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
              
              <div class="main-card mb-3 card">
                <div class="no-gutters row">
                  <div class="col-md-4">
                    <div class="pt-0 pb-0 card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-outer">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                  <div class="widget-heading">Annual Rental Income</div>
                                  <div class="widget-subheading">Income received from property excluding expenses</div>
                                </div>
                                <div class="widget-content-right">
                                  <div class="widget-numbers text-success">$<span id="rentalIncome${num}">9000</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-outer">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                  <div class="widget-heading">Annual Expenses</div>
                                  <div class="widget-subheading">Total expenses of the property</div>
                                </div>
                                <div class="widget-content-right">
                                  <div class="widget-numbers text-warning">$<span id="expenses${num}">1724</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="pt-0 pb-0 card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-outer">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                  <div class="widget-heading">Net Yield</div>
                                  <div class="widget-subheading">Variance in property value from purchase price</div>
                                </div>
                                <div class="widget-content-right">
                                  <div class="widget-numbers text-primary"><span id="netYield${num}">1.54</span>%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <!-- <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-outer">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                  <div class="widget-heading">Monthly Mortgage</div>
                                  <div class="widget-subheading">Mortgage to be paid per month</div>
                                </div>
                                <div class="widget-content-right">
                                  <div class="widget-numbers text-danger"><span id="monthlyMortgage${num}">1900</span>%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li> -->
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="pt-0 pb-0 card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-outer">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                  <div class="widget-heading">CoC ROI</div>
                                  <div class="widget-subheading">Cash on Cash ROI</div>
                                </div>
                                <div class="widget-content-right">
                                  <div class="widget-numbers text-success"><span id="cocCard${num}">1.54</span>%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="widget-content p-0">
                            <div class="widget-content-outer">
                              <div class="widget-content-wrapper">
                                <div class="widget-content-left">
                                  <div class="widget-heading">Weekly Cash Flow</div>
                                  <div class="widget-subheading">Variance between income and expenses</div>
                                </div>
                                <div class="widget-content-right">
                                  <div class="widget-numbers text-warning">$<span id="cashFlow${num}">1724</span></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 col-lg-12">
                  <div class="mb-3 card">
                    <div class="card-header-tab card-header">
                      <div class="card-header-title">
                        <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                        Income and Expenses Chart
                      </div>
                      <div class="btn-actions-pane-right">
                      </div>
                    </div>
                    <div class="tab-content">
                      <div class="tab-pane fade active show" id="tab-eg-55">
                        <div class="widget-chart p-3">
                          <canvas id="capitalGrowthChart${num}"></canvas>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <button type="button" data-toggle="collapse" href="#collapseChart${num}" class="btn btn-primary">Toggle Chart</button>
                      <div class="collapse" id="collapseChart${num}">
                        <table class="mb-0 table table-striped">
                          <thead>
                          <tr>
                            <th>Year</th>
                            <th>Rental Income Growth</th>
                            <th>Expense Growth</th>
                            <th>Property Value</th>
                            <th>Equity</th>
                            <th>Loan Balance</th>
                          </tr>
                          </thead>
                          <tbody id="capitalGrowthChart${num}Table"></tbody>
                        </table>
                      </div>
                    </div>
                    <div class="card-body">
                      <form class="">
                        <div class="input-column">
                          <h5 class="card-title subtitle" style="color: #4CAF50;">Annual Income</h5>
                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Weekly Rental</b></label>
                                <input type="range" min="50" max="850" step="10" value="230" class="slider"
                                       id="weeklyRentalSlider${num}">
                                <p>Value: $<span id="weeklyRentalDemo${num}"></span></p>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Income Growth</b></label>
                                <input type="range" min="0" max="10" step="0.1" value="2" class="slider"
                                       id="annualIncomeGrowthSlider${num}">
                                <p>Value: <span id="annualIncomeGrowthDemo${num}"></span>%</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="input-column">
                          <h5 class="card-title  subtitle" style="color: #4CAF50;">Monthly Expenses</h5>
                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Insurance</b></label>
                                <input type="range" min="0" max="15000" step="100" value="0" class="slider"
                                       id="insuranceSlider${num}">
                                <p>Value: $<span id="insuranceDemo${num}"></span></p>
                              </div>
                            </div>
                            
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Council rates</b></label>
                                <input type="range" min="0" max="15000" step="100" value="0" class="slider"
                                       id="councilRatesSlider${num}">
                                <p>Value: $<span id="councilRatesDemo${num}"></span></p>
                              </div>
                            </div>
                          </div>
                          
                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Bank Fees</b></label>
                                <input type="range" min="0" max="15000" step="100" value="0" class="slider"
                                       id="bankFeesSlider${num}">
                                <p>Value: $<span id="bankFeesDemo${num}"></span></p>
                              </div>
                            </div>
                            
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Repairs and maintenance</b></label>
                                <input type="range" min="0" max="15000" step="100" value="0" class="slider"
                                       id="repairsAndMaintenanceSlider${num}">
                                <p>Value: $<span id="repairsAndMaintenanceDemo${num}"></span></p>
                              </div>
                            </div>
                          </div>
                          
                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Accountant rates</b></label>
                                <input type="range" min="0" max="15000" step="100" value="0" class="slider"
                                       id="accountantRatesSlider${num}">
                                <p>Value: $<span id="accountantRatesDemo${num}"></span></p>
                              </div>
                            </div>
                            
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Other expenses</b></label>
                                <input type="range" min="0" max="15000" step="100" value="0" class="slider"
                                       id="otherExpensesSlider${num}">
                                <p>Value: $<span id="otherExpensesDemo${num}"></span></p>
                              </div>
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Management Fees</b></label>
                                <input type="range" min="0" max="20" step="1" value="0" class="slider"
                                       id="managementFeesSlider${num}">
                                <p>Value: <span id="managementFeesDemo${num}"></span>%</p>
                              </div>
                            </div>
                            
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Vacancy</b></label>
                                <input type="range" min="0" max="20" step="1" value="2" class="slider" id="vacancySlider${num}">
                                <p>Value: <span id="vacancyDemo${num}"></span>%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div class="form-row">
                          <div class="col-md-6">
                            <div class="position-relative form-group">
                              <label><b>Expense Growth</b></label>
                              <input type="range" min="0" max="10" step="0.5" value="2" class="slider"
                                     id="expenseGrowthSlider${num}">
                              <p>Value: <span id="expenseGrowthDemo${num}"></span>%</p>
                            </div>
                          </div>
                        </div>
                        
                        <div class="input-column">
                          <h5 class="card-title  subtitle" style="color: #4CAF50;">Loan Details</h5>
                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Principal on mortgage</b></label>
                                <input type="range" min="400000" max="1000000" step="1000" value="0" class="slider"
                                       id="principalOnMortgageSlider${num}">
                                <p>Value: $<span id="principalOnMortgageDemo${num}"></span></p>
                              </div>
                            </div>
                            
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Interest on mortgage</b></label>
                                <input type="range" min="0" max="10" step="0.1" value="0" class="slider"
                                       id="interestOnMortgageSlider${num}">
                                <p>Value: <span id="interestOnMortgageDemo${num}"></span>%</p>
                              </div>
                            </div>
                          </div>
                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Deposit</b></label>
                                <input type="range" min="0" max="500000" step="1000" value="0" class="slider"
                                       id="depositSlider${num}">
                                <p>Value: $<span id="depositDemo${num}"></span></p>
                              </div>
                            </div>

                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Purchase price</b></label>
                                <input type="range" min="200000" max="1000000" step="1000" value="400000" class="slider"
                                       id="purchasePriceSlider${num}">
                                <p>Value: $<span id="purchasePriceDemo${num}"></span></p>
                              </div>
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Loan term</b></label>
                                <input type="range" min="0" max="40" step="1" value="30" class="slider"
                                       id="loanTermSlider${num}">
                                <p>Value: <span id="loanTermDemo${num}"></span> years</p>
                              </div>
                            </div>
                            
                            <div class="col-md-6">
                              <div class="position-relative form-group">
                                <label><b>Capital growth rate</b></label>
                                <input type="range" min="0" max="10" step="0.1" value="3.0" class="slider"
                                       id="capitalGrowthRateSlider${num}">
                                <p>Value: <span id="capitalGrowthRateDemo${num}"></span>%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <button class="mb-2 mr-2 btn btn-warning disabled" style="background-color: #f7b924">Generate Report</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  getElem("graphContainerWrapper").insertAdjacentHTML('beforeend', graphContainerString);

  setSliderValues(num);
  setContainerMapValues(num);
  setCardValues(num);
  createChart(num);
  resetValues(num);
  setSliderResponses(num);
}

function setSliderValues(num) {
  // Setting Demo Value based on slider value for section
  getElem("weeklyRentalDemo" + num).innerHTML = getElem("weeklyRentalSlider" + num).value;
  getElem("annualIncomeGrowthDemo" + num).innerHTML = getElem("annualIncomeGrowthSlider" + num).value;

  getElem("principalOnMortgageDemo" + num).innerHTML = getElem("principalOnMortgageSlider" + num).value;
  getElem("interestOnMortgageDemo" + num).innerHTML = getElem("interestOnMortgageSlider" + num).value;
  getElem("insuranceDemo" + num).innerHTML = getElem("insuranceSlider" + num).value;
  getElem("councilRatesDemo" + num).innerHTML = getElem("councilRatesSlider" + num).value;
  getElem("bankFeesDemo" + num).innerHTML = getElem("bankFeesSlider" + num).value;
  getElem("repairsAndMaintenanceDemo" + num).innerHTML = getElem("repairsAndMaintenanceSlider" + num).value;
  getElem("accountantRatesDemo" + num).innerHTML = getElem("accountantRatesSlider" + num).value;
  getElem("otherExpensesDemo" + num).innerHTML = getElem("otherExpensesSlider" + num).value;
  getElem("vacancyDemo" + num).innerHTML = getElem("vacancySlider" + num).value;
  getElem("managementFeesDemo" + num).innerHTML = getElem("managementFeesSlider" + num).value;

  getElem("depositDemo" + num).innerHTML = getElem("depositSlider" + num).value;
  getElem("purchasePriceDemo" + num).innerHTML = getElem("purchasePriceSlider" + num).value;
  getElem("loanTermDemo" + num).innerHTML = getElem("loanTermSlider" + num).value;
  getElem("capitalGrowthRateDemo" + num).innerHTML = getElem("capitalGrowthRateSlider" + num).value;
  getElem("expenseGrowthDemo" + num).innerHTML = getElem("expenseGrowthSlider" + num).value;
}

function setSliderResponses(num) {
  // Slider Responses
  getElem("weeklyRentalSlider" + num).oninput = function () {
    getElem("weeklyRentalDemo" + num).innerHTML = this.value;
    list[num - 1].set("weeklyRental", parseInt(this.value));
    list[num - 1].set("rentalIncome", Math.round(parseInt(this.value) * (52 * (1 - (list[num - 1].get("vacancy") / 100)))));
    getElem("rentalIncome" + num).innerHTML = list[num - 1].get("rentalIncome");
    resetValues(num);
  };
  getElem("annualIncomeGrowthSlider" + num).oninput = function () {
    getElem("annualIncomeGrowthDemo" + num).innerHTML = this.value;
    list[num - 1].set("annualIncomeGrowth", parseInt(this.value));
    resetValues(num);
  };

  getElem("principalOnMortgageSlider" + num).oninput = function () {
    getElem("principalOnMortgageDemo" + num).innerHTML = this.value;
    list[num - 1].set("principalOnMortgage", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("interestOnMortgageSlider" + num).oninput = function () {
    getElem("interestOnMortgageDemo" + num).innerHTML = this.value;
    list[num - 1].set("interestOnMortgage", parseFloat(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("insuranceSlider" + num).oninput = function () {
    getElem("insuranceDemo" + num).innerHTML = this.value;
    list[num - 1].set("insurance", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("councilRatesSlider" + num).oninput = function () {
    getElem("councilRatesDemo" + num).innerHTML = this.value;
    list[num - 1].set("councilRates", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("bankFeesSlider" + num).oninput = function () {
    getElem("bankFeesDemo" + num).innerHTML = this.value;
    list[num - 1].set("bankFees", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("repairsAndMaintenanceSlider" + num).oninput = function () {
    getElem("repairsAndMaintenanceDemo" + num).innerHTML = this.value;
    list[num - 1].set("repairsAndMaintenance", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("accountantRatesSlider" + num).oninput = function () {
    getElem("accountantRatesDemo" + num).innerHTML = this.value;
    list[num - 1].set("accountantRates", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("otherExpensesSlider" + num).oninput = function () {
    getElem("otherExpensesDemo" + num).innerHTML = this.value;
    list[num - 1].set("otherExpenses", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("vacancySlider" + num).oninput = function () {
    getElem("vacancyDemo" + num).innerHTML = this.value;
    list[num - 1].set("vacancy", parseInt(this.value));
    list[num - 1].set("rentalIncome", Math.round(parseInt(getElem("weeklyRentalSlider" + num).value) * (52 * (1 - (list[num - 1].get("vacancy") / 100)))));
    getElem("rentalIncome" + num).innerHTML = list[num - 1].get("rentalIncome");
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("managementFeesSlider" + num).oninput = function () {
    getElem("managementFeesDemo" + num).innerHTML = this.value;
    list[num - 1].set("managementFees", parseInt(this.value));
    calculateTotalExpenses(num);
    getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
    resetValues(num);
  };
  getElem("expenseGrowthSlider" + num).oninput = function () {
    getElem("expenseGrowthDemo" + num).innerHTML = this.value;
    list[num - 1].set("expenseGrowth", parseInt(this.value));
    resetValues(num);
  };


  getElem("purchasePriceSlider" + num).oninput = function () {
    getElem("purchasePriceDemo" + num).innerHTML = this.value;
    list[num - 1].set("purchasePrice", parseInt(this.value));
    resetValues(num);
  };
  getElem("loanTermSlider" + num).oninput = function () {
    getElem("loanTermDemo" + num).innerHTML = this.value;
    list[num - 1].set("loanTerm", parseInt(this.value));
    resetValues(num);
  };
  getElem("capitalGrowthRateSlider" + num).oninput = function () {
    getElem("capitalGrowthRateDemo" + num).innerHTML = this.value;
    list[num - 1].set("capitalGrowthRate", parseFloat(this.value));
    resetValues(num);
  };
  getElem("depositSlider" + num).oninput = function () {
    getElem("depositDemo" + num).innerHTML = this.value;
    list[num - 1].set("deposit", parseInt(getElem("depositSlider" + num).value));
    resetValues(num);
  };
}

function setContainerMapValues(num) {
  let containerVariablesMap = new Map(); // Map where each home's variables are stored

  // Setting values to Calculation Fields of section
  containerVariablesMap.set("active", true);
  containerVariablesMap.set("vacancy", parseInt(getElem("vacancySlider" + num).value));
  containerVariablesMap.set("weeklyRental", parseInt(getElem("weeklyRentalSlider" + num).value));
  containerVariablesMap.set("rentalIncome", Math.round(parseInt(getElem("weeklyRentalSlider" + num).value) * (52 * (1 - (containerVariablesMap.get("vacancy") / 100)))));
  containerVariablesMap.set("annualIncomeGrowth", parseInt(getElem("annualIncomeGrowthSlider" + num).value));
  containerVariablesMap.set("principalOnMortgage", parseInt(getElem("principalOnMortgageSlider" + num).value));
  containerVariablesMap.set("interestOnMortgage", parseInt(getElem("interestOnMortgageSlider" + num).value));
  containerVariablesMap.set("insurance", parseInt(getElem("insuranceSlider" + num).value));
  containerVariablesMap.set("councilRates", parseInt(getElem("councilRatesSlider" + num).value));
  containerVariablesMap.set("bankFees", parseInt(getElem("bankFeesSlider" + num).value));
  containerVariablesMap.set("repairsAndMaintenance", parseInt(getElem("repairsAndMaintenanceSlider" + num).value));
  containerVariablesMap.set("accountantRates", parseInt(getElem("accountantRatesSlider" + num).value));
  containerVariablesMap.set("otherExpenses", parseInt(getElem("otherExpensesSlider" + num).value));
  containerVariablesMap.set("totalExpenses", 0);
  containerVariablesMap.set("managementFees", parseInt(getElem("managementFeesSlider" + num).value));
  containerVariablesMap.set("deposit", parseInt(getElem("depositSlider" + num).value));
  containerVariablesMap.set("purchasePrice", parseInt(getElem("purchasePriceSlider" + num).value));
  containerVariablesMap.set("loanTerm", parseInt(getElem("loanTermSlider" + num).value));
  containerVariablesMap.set("capitalGrowthRate", parseFloat(getElem("capitalGrowthRateSlider" + num).value));
  containerVariablesMap.set("expenseGrowth", parseInt(getElem("expenseGrowthSlider" + num).value));
  containerVariablesMap.set("netYield", 1.54);
  containerVariablesMap.set("coc", (containerVariablesMap.get("rentalIncome") / (containerVariablesMap.get("purchasePrice")) + 1));
  containerVariablesMap.set("cashFlow", (containerVariablesMap.get("rentalIncome") - (containerVariablesMap.get("otherExpenses")) + 1));

  list.push(containerVariablesMap);
}

function setCardValues(num) {
  getElem("rentalIncome" + num).innerHTML = list[num - 1].get("rentalIncome");
  getElem("cocCard" + num).innerHTML = list[num - 1].get("coc").toFixed(4).toString();
  getElem("cashFlow" + num).innerHTML = (list[num - 1].get("cashFlow")).toFixed(2).toString();
  getElem("expenses" + num).innerHTML = list[num - 1].get("totalExpenses").toString();
  getElem("netYield" + num).innerHTML = list[num - 1].get("netYield").toString();
}

function createChart(num) {
  // Line Chart
  let chart = new Chart(document.getElementById('capitalGrowthChart' + num).getContext('2d'), {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      datasets: [
        {
          label: 'Rental Income Growth',
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
        },
        {
          label: 'Expense Growth',
          borderColor: '#fbde25',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
        },
        {
          label: 'Property Value',
          borderColor: '#4da4ed',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
        },
        {
          label: 'Equity',
          borderColor: '#C8102E',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
        },
        {
          label: 'Loan Balance',
          borderColor: '#005776',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
        }
      ]
    },

    // Configuration options go here
    options: {
      responsive: true,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Amount'
          }
        }]
      }
    }
  });

  list[num - 1].set("chart", chart);
}

function updateLabel(num) {
  let currentYear = new Date().getFullYear();
  list[num - 1].get("chart").data.labels = [];
  for (let i = 0; i <= list[num - 1].get("loanTerm"); i++) {
    list[num - 1].get("chart").data.labels.push(currentYear + i);
  }
  list[num - 1].get("chart").update();
}

function calculateAnnualIncomeGrowthOverTime(num) {
  updateLabel(num);
  list[num - 1].get("chart").data.datasets[0].data = [];
  let income = list[num - 1].get("rentalIncome");
  list[num - 1].get("chart").data.datasets[0].data.push(income);
  for (let i = 1; i <= list[num - 1].get("loanTerm"); i++) {
    income += (income * (list[num - 1].get("annualIncomeGrowth") / 100));
    list[num - 1].get("chart").data.datasets[0].data.push(income);
  }
  list[num - 1].get("chart").update();
}

function calculateExpenseGrowthOverTime(num) {
  updateLabel(num);
  list[num - 1].get("chart").data.datasets[1].data = calculateExpenses(num);
  list[num - 1].get("chart").update();
}

function calculateTotalExpenses(num) {
  let map = list[num - 1];
  list[num - 1].set("totalExpenses", map.get("insurance") + map.get("councilRates") + map.get("bankFees") + map.get("repairsAndMaintenance") + map.get("accountantRates") + map.get("otherExpenses"));
}

function calculateExpenses(num) {
  let expenses = [];
  let exp = list[num - 1].get("totalExpenses") + (list[num - 1].get("totalExpenses") * (list[num - 1].get("vacancy") / 100)) + (list[num - 1].get("totalExpenses") * (list[num - 1].get("managementFees") / 100));
  expenses.push(exp);
  for (let i = 1; i <= list[num - 1].get("loanTerm"); i++) {
    exp += (exp * (list[num - 1].get("expenseGrowth") / 100));
    expenses.push(exp);
  }
  return expenses;
}

function calculateCoC(num) {
  list[num - 1].set("coc", (list[num - 1].get("cashFlow") / list[num - 1].get("purchasePrice")) + 1);
  getElem("cocCard" + num).innerHTML = list[num - 1].get("coc").toFixed(4).toString();
}

function calculateCashFlow(num) {
  let annualCashFlow = list[num - 1].get("rentalIncome") - list[num - 1].get("totalExpenses");
  list[num - 1].set("cashFlow", annualCashFlow);
  getElem("cashFlow" + num).innerHTML = (annualCashFlow/52).toFixed(2).toString();
}

function calculateNetYield(num) {
  list[num - 1].set("netYield", ((list[num - 1].get("weeklyRental") * 52) - list[num - 1].get("otherExpenses")) / list[num - 1].get("purchasePrice") * 100);
  getElem("netYield" + num).innerHTML = list[num - 1].get("netYield").toFixed(4).toString();
}

function calculatePropertyValueOverTime(num) {
  list[num - 1].get("chart").data.datasets[2].data = [];
  for (let i = 0; i <= list[num - 1].get("loanTerm"); i++) {
    list[num - 1].get("chart").data.datasets[2].data.push(list[num - 1].get("purchasePrice") * (1 + (list[num - 1].get("capitalGrowthRate") / 100) * i));
  }
  list[num - 1].get("chart").update();
}

function calculateLoanBalanceOverTime(num) {
  list[num - 1].get("chart").data.datasets[4].data = [];
  let leftToPay = list[num - 1].get("principalOnMortgage");
  list[num - 1].get("chart").data.datasets[4].data.push(leftToPay);
  for (let i = 0; i <= list[num - 1].get("loanTerm"); i++) {
    leftToPay += (leftToPay * (list[num - 1].get("interestOnMortgage") / 100));
    leftToPay -= (leftToPay / (list[num - 1].get("loanTerm") - i));
    list[num - 1].get("chart").data.datasets[4].data.push(leftToPay);
  }
  list[num - 1].get("chart").update();
}

function calculateEquityOverTime(num) {
  list[num - 1].get("chart").data.datasets[3].data = [];
  for (let i = 0; i <= list[num - 1].get("loanTerm"); i++) {
    let propValue = list[num - 1].get("purchasePrice") * (1 + (list[num - 1].get("capitalGrowthRate") / 100) * i);
    list[num - 1].get("chart").data.datasets[3].data.push(propValue - list[num - 1].get("purchasePrice"));
  }
  list[num - 1].get("chart").update();
}

function createTable1Home(num) {
  // Remove children
  let table = getElem(`capitalGrowthChart${num}Table`);
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }

  let years = [0, 1, 2, 3, 4, 9, 14, 19, 24, 29];
  for (let i = 0; i <= list[num - 1].get("loanTerm"); i++) {
    if (years.includes(i)) {
      let tableRowString = '<tr>\n' +
        '                 <th scope="row">' + ++i + '</th>\n' +
        '                 <td>$' + list[num - 1].get("chart").data.datasets[0].data[i].toFixed(2).toString() + '</td>\n' +
        '                 <td>$' + list[num - 1].get("chart").data.datasets[1].data[i].toFixed(2).toString() + '</td>\n' +
        '                 <td>$' + list[num - 1].get("chart").data.datasets[2].data[i].toFixed(2).toString() + '</td>\n' +
        '                 <td>$' + list[num - 1].get("chart").data.datasets[3].data[i].toFixed(2).toString() + '</td>\n' +
        '                 <td>$' + list[num - 1].get("chart").data.datasets[4].data[i].toFixed(2).toString() + '</td>\n' +
        '                </tr>';
      table.insertAdjacentHTML('beforeend', tableRowString);
    }
  }
}

function toggleHome(num) {
  getElem(`graphContainer${num}`).scrollIntoView();
}
