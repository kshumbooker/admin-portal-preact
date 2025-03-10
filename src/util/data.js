let data = {
	'pages': [
		{
			'uri': 'login',
			'content': [
				{
					'heading': 'Administration Login',
				}
			]
		},
		{
			'uri': 'validation',
			'content': [
				{
					'heading': 'Administration Login',
					'alert': {
						'type': 'danger',
						'msg': 'Invalid User ID / Password combination, please try again'
					}
				}
			]
		},
		{
			'uri': 'verification',
			'content': [
				{
					'heading': 'Login Verification',
					'paragraph': `We have sent you a verification code to your registered mobile number, please enter your 8-digit code in the box below to continue your login. 
        
					Didn\'t receive a SMS?`,
					'alert1': {
						'type': 'success',
						'msg': 'New login code has been sent via SMS'
					}, 
					'alert2': {
						'type': 'info',
						'msg': 'You will be able to request another code in 30 seconds'
					}
				}
			]
		},
		{
			'uri': 'forgottenpassword',
			'content': [
				{
					'heading': 'Forgotten Password',
				}
			]
		},
		{
			'uri': 'home',
			'content': [{
				
				'navigation': [{
		'id': 'clickAndCollect',
		'name': 'Click and Collect',
		'icon': 'computer-mouse',
		'children': [{
			'name': 'Barred Categories',
			'href': '/admin/function/AdminBarringManagement'
		},
							{
								'name': 'Click and Collect Branches Configuration',
								'href': '/admin/function/AdminCollectionBranches'
							},
							{
								'name': 'Collection Lead Time',
								'href': '/admin/function/AdminCollectionLeadTime'
							},
							{
								'name': 'Online Exclusive Branches',
								'href': '/admin/function/AdminOnlineExclusiveBranches'
							}
						]
					},
					{
						'id': 'customer',
						'name': 'Customer',
						'icon': 'user',
						'children': [{
								'name': 'BRP Email Override',
								'href': '/admin/function/AdminBRPEmailOverride'
							},
							{
								'name': 'Contact Preferences',
								'href': '/admin/function/admincontactprefs'
							},
							{
								'name': 'CRM Customer Search',
								'href': '/admin/function/admincrmcustomersearch'
							},
							{
								'name': 'CST Delivery Tracker',
								'href': '/admin/function/admincstdeliverytracker'
							},
							{
								'name': 'Customer Passsword Reset',
								'href': '/admin/function/adminpasswordreset'
							},
							{
								'name': 'Customer Account Deletion',
								'href': '/admin/function/AdminAccountDelete'
							},
							{
								'name': 'Change Login Email',
								'href': '/admin/function/adminemailchange'
							},
							{
								'name': 'Hide Prices for National Accounts',
								'href': '/admin/function/adminnachideprices'
							},
							{
								'name': 'Online Registration - Registration Assistance',
								'href': '/admin/function/AdminRegistrationAssistance'
							},
							{
								'name': 'Prevent Self Registration',
								'href': '/admin/function/AdminPreventSelfReg'
							},
							{
								'name': 'Registration - Classification',
								'href': '/admin/function/AdminClassifications'
							}
						]
					},
					{
						'id': 'branch',
						'name': 'Branch',
						'icon': 'code-branch',
						'children': [{
								'name': 'Butchery Manager Profile',
								'href': '/admin/function/AdminButcheryProfile'
							},
							{
								'name': 'Butchery Messages',
								'href': '/admin/function/AdminButcheryMessages'
							},
							{
								'name': 'Restrict Login to a Branch',
								'href': '/admin/function/AdminRestrictLogin'
							},
							{
								'name': 'Managers Photos',
								'href': '/admin/function/AdminManagerPictures'
							},
							{
								'name': 'Managers Wipeboard',
								'href': '/admin/function/AdminWipeboard'
							}
						],
					},
					{
						'id': 'centralBilling',
						'name': 'Central Billing',
						'icon': 'money-bill',
						'children': [{
								'name': 'Central Billing Supplier Management',
								'href': '/admin/function/AdminCentralBillingSupplier'
							},
							{
								'name': 'Central Billing Manage Customers',
								'href': '/admin/function/AdminCentralBillingCustomers'
							}
						],
					},
					{
						'id': 'userFunction',
						'name': 'User Function',
						'icon': 'users',
						'children': [{
								'name': 'Change Your Details',
								'href': '/admin/function/adminchangepassword'
							},
							{
								'name': 'Portal User Management',
								'href': '/admin/function/adminusers'
							},
							{
								'name': 'Contact Preferences User Management',
								'href': '/admin/function/adminuserscontactprefs'
							},
							{
								'name': 'Telesales User Management',
								'href': '/admin/function/adminuserscontactprefs'
							},
							{
								'name': 'Wipeboard User Management',
								'href': '/admin/function/adminuserswipeboard'
							},
							{
								'name': 'Logout',
								'href': '/admin/portal/logout'
							},
							{
								'name': 'Portal Roles Management',
								'href': '/admin/function/adminroles'
							},
							{
								'name': 'Manage User Departments',
								'href': '/admin/function/adminuserdepartments'
							}
						],
					},
					{
						'id': 'claims',
						'name': 'Claims',
						'icon': 'person-circle-exclamation',
						'children': [{
								'name': 'Claims/Tickets Visibility',
								'href': '/admin/function/adminclaimstickets'
							},
							{
								'name': 'Create New Claim',
								'href': '/admin/function/admincreateclaim'
							},
							{
								'name': 'View Claims',
								'href': '/admin/function/adminviewclaim'
							}
						],
					},
					{
						'id': 'product',
						'name': 'Product',
						'icon': 'product-hunt',
						'children': [{
								'name': 'Delete Brandbank Data',
								'href': '/admin/function/AdminDeleteBrandBank'
							},
							{
								'name': 'Delete Images',
								'href': '/admin/function/AdminDeleteImages'
							},
							{
								'name': 'Minimum Delivery Management',
								'href': '/admin/function/AdminDeliveryMinimum'
							},
							{
								'name': 'Brandbank EAN Retrieval',
								'href': '/admin/function/AdminBrandbank'
							},
							{
								'name': 'Choose Filters to Display',
								'href': '/admin/function/AdminManageFilters'
							}
						],
					},
					{
						'id': 'digitalVouchers',
						'name': 'Digital Vouchers',
						'icon': 'ticket',
						'children': [{
							'name': 'Create Digital Voucher',
							'href': '/admin/DigitalVouchers'
						}],
					},
					{
						'id': 'content',
						'name': 'Content',
						'icon': 'arrows-to-circle',
						'children': [{
								'name': 'Facia Management',
								'href': '/admin/function/Adminfacia'
							},
							{
								'name': 'Website Bulletin',
								'href': '/admin/function/AdminBulletin'
							},
							{
								'name': 'Site Settings',
								'href': '/admin/function/AdminSettings'
							}
						],
					},
					{
						'id': 'promotion',
						'name': 'Promotion',
						'icon': 'percent',
						'children': [{
								'name': 'My Allocations/Weekly Deals',
								'href': 'admin/function/AdminAllocations'
							},
							{
								'name': 'My Allocations/Weekly Deals Report',
								'href': '/admin/function/AdminAllocationsReport'
							},
							{
								'name': 'Pre-Sell Management',
								'href': '/admin/function/AdminPresellManagement'
							},
							{
								'name': 'Pre-Sell Orders Report',
								'href': '/admin/function/AdminPresellOrdersReport'
							},
							{
								'name': 'Pre-Sell Report',
								'href': '/admin/function/AdminPresellReport'
							}
						],
					},
					{
						'id': 'search',
						'name': 'Search',
						'icon': 'magnifying-glass',
						'children': [{
								'name': 'Negative Search Terms',
								'href': '/admin/function/AdminNegativeSearches'
							},
							{
								'name': 'Search Phrase Synonyms',
								'href': '/admin/function/AdminSearchTokens'
							}
						],
					},
					{
						'id': 'ourbooker',
						'name': 'OurBooker',
						'icon': '',
						'children': [{
							'name': 'Account Deregister',
							'href': '/admin/function/OBAccountDeregister'
						}],
						'id': 'shopByBrand',
						'name': 'Shop By Brand',
						'icon': 'shop',
						'children': [{
							'name': 'Supplier Brand Management',
							'href': '/admin/ShopByBrand/ActiveBrandListing'
						}],
					},
					{
						'id': 'telesales',
						'name': 'Telesales',
						'icon': 'tv',
						'children': [{
							'name': 'Telesales System',
							'href': '/admin/telesales'
						}],
						'childChildren': [{
								'name': 'Register Customer',
								'href': '/admin/telesales/entercustomernumber'
							},
							{
								'name': 'Choose Customer',
								'href': '/admin/telesales/selectcustomer'
							},
							{
								'name': 'Customer Search',
								'href': '/admin/telesales/customersearch'
							},
							{
								'name': 'Create Order',
								'href': '/admin/telesales/productorderentry'
							},
							{
								'name': 'Edit Customer Account',
								'href': '/admin/telesales/editcustomeracc'
							},
							{
								'name': 'Recent Purchases',
								'href': '/products/RecentPurchases'
							},
							{
								'name': 'Shopping Lists',
								'href': '/Products/ShoppingList'
							},
							{
								'name': 'My Booker',
								'href': '/my-booker'
							},
							{
								'name': 'Products',
								'href': '/products/categories'
							},
							{
								'name': 'Promotions',
								'href': '/catalog/promotions'
							},
							{
								'name': 'Services',
								'href': '/catalog/services'
							},
							{
								'name': 'Deals For You',
								'href': '/catalog/myallocationshome.aspx'
							}
						]
				}]
			}]
		}
	],
}

  