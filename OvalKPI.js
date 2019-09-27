define( ["qlik", "text!./template.html","css!./style.css","css!https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"],
	function ( qlik, template ) {
		return {
			  definition: {
                type: "items",
                component: "accordion",
                items: {
					KpiSettings:{
						label:"KPI Settings",
						items:{
							header: {
								type: "string",
								ref: "header",
								label: "Header Label",
								expression: "optional"
						   },
						   headerCSS: {
								type: "string",
								ref: "headerCSS",
								label: "Header CSS",
								expression: "optional"
						   },
						   Icon: {
							  "type": "string",
							  "ref": "Icon",
							  "label": "Icon"
						   },
						   IconColor: {
							  "type": "string",
							  "ref": "IconColor",
							  "label": "Icon Color"
						   },
						   Value: {
								type: "string",
								ref: "Value",
								label: "Value",
								expression: "optional"
						   },
						   BGColor: {
							  "type": "string",
							  "ref": "BGColor",
							  "label": "Background Color"
						   }
						}
					},
					settings: {
					uses: "settings",
						items: {
						}
					}
				}
			},
			template: template,
			support: {
				snapshot: false,
				export: false,
				exportData: false
			},
			paint: function () {

				return qlik.Promise.resolve();
			},
			controller: ['$scope', function ( $scope ) {
				//add your rendering code here
				$scope.html = "Hello World";
			}]
		};

	} );

