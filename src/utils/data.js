const data = {
	'header': 'https://assets-global.website-files.com/61f27d3474c2ef62975a0106/61f27d3474c2ef78475a0118_Booker%20logo.svg',
  'color': '#2356AA',
	'navigation': [{
		'name': 'Click & Collect',
		'icon': '<i class="fa-solid fa-computer-mouse"></i>',
		'sub': [{
			'name': 'Barred Categories',
			'url': '/admin/function/AdminBarringManagement'
		},
							{
								'name': 'Click and Collect Branches Configuration',
								'url': '/admin/function/AdminCollectionBranches'
							},
							{
								'name': 'Collection Lead Time',
								'url': '/admin/function/AdminCollectionLeadTime'
							},
							{
								'name': 'Online Exclusive Branches',
								'url': '/admin/function/AdminOnlineExclusiveBranches'
							}
						]
					},
					{
						'name': 'Customer',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'BRP Email Override',
								'url': '/admin/function/AdminBRPEmailOverride'
							},
							{
								'name': 'Contact Preferences',
								'url': '/admin/function/admincontactprefs'
							},
							{
								'name': 'CRM Customer Search',
								'url': '/admin/function/admincrmcustomersearch'
							},
							{
								'name': 'CST Delivery Tracker',
								'url': '/admin/function/admincstdeliverytracker'
							},
							{
								'name': 'Customer Passsword Reset',
								'url': '/admin/function/adminpasswordreset'
							},
							{
								'name': 'Customer Account Deletion',
								'url': '/admin/function/AdminAccountDelete'
							},
							{
								'name': 'Change Login Email',
								'url': '/admin/function/adminemailchange'
							},
							{
								'name': 'Hide Prices for National Accounts',
								'url': '/admin/function/adminnachideprices'
							},
							{
								'name': 'Online Registration - Registration Assistance',
								'url': '/admin/function/AdminRegistrationAssistance'
							},
							{
								'name': 'Prevent Self Registration',
								'url': '/admin/function/AdminPreventSelfReg'
							},
							{
								'name': 'Registration - Classification',
								'url': '/admin/function/AdminClassifications'
							}
						]
					},
					{
						'name': 'Branch',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'Butchery Manager Profile',
								'url': '/admin/function/AdminButcheryProfile'
							},
							{
								'name': 'Butchery Messages',
								'url': '/admin/function/AdminButcheryMessages'
							},
							{
								'name': 'Restrict Login to a Branch',
								'url': '/admin/function/AdminRestrictLogin'
							},
							{
								'name': 'Managers Photos',
								'url': '/admin/function/AdminManagerPictures'
							},
							{
								'name': 'Managers Wipeboard',
								'url': '/admin/function/AdminWipeboard'
							}
						],
					},
					{
						'name': 'Central Billing',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'Central Billing Supplier Management',
								'url': '/admin/function/AdminCentralBillingSupplier'
							},
							{
								'name': 'Central Billing Manage Customers',
								'url': '/admin/function/AdminCentralBillingCustomers'
							}
						],
					},
					{
						'name': 'User Function',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'Change Your Details',
								'url': '/admin/function/adminchangepassword'
							},
							{
								'name': 'Portal User Management',
								'url': '/admin/function/adminusers'
							},
							{
								'name': 'Contact Preferences User Management',
								'url': '/admin/function/adminuserscontactprefs'
							},
							{
								'name': 'Telesales User Management',
								'url': '/admin/function/adminuserscontactprefs'
							},
							{
								'name': 'Wipeboard User Management',
								'url': '/admin/function/adminuserswipeboard'
							},
							{
								'name': 'Logout',
								'url': '/admin/portal/logout'
							},
							{
								'name': 'Portal Roles Management',
								'url': '/admin/function/adminroles'
							},
							{
								'name': 'Manage User Departments',
								'url': '/admin/function/adminuserdepartments'
							}
						],
					},
					{
						'name': 'Claims',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'Claims/Tickets Visibility',
								'url': '/admin/function/adminclaimstickets'
							},
							{
								'name': 'Create New Claim',
								'url': '/admin/function/admincreateclaim'
							},
							{
								'name': 'View Claims',
								'url': '/admin/function/adminviewclaim'
							}
						],
					},
					{
						'name': 'Product',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'Delete Brandbank Data',
								'url': '/admin/function/AdminDeleteBrandBank'
							},
							{
								'name': 'Delete Images',
								'url': '/admin/function/AdminDeleteImages'
							},
							{
								'name': 'Minimum Delivery Management',
								'url': '/admin/function/AdminDeliveryMinimum'
							},
							{
								'name': 'Brandbank EAN Retrieval',
								'url': '/admin/function/AdminBrandbank'
							},
							{
								'name': 'Choose Filters to Display',
								'url': '/admin/function/AdminManageFilters'
							}
						],
					},
					{
						'name': 'Digital Vouchers',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
							'name': 'Create Digital Voucher',
							'url': '/admin/DigitalVouchers'
						}],
					},
					{
						'name': 'Content',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'Facia Management',
								'url': '/admin/function/Adminfacia'
							},
							{
								'name': 'Website Bulletin',
								'url': '/admin/function/AdminBulletin'
							},
							{
								'name': 'Site Settings',
								'url': '/admin/function/AdminSettings'
							}
						],
					},
					{
						'name': 'Promotion',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'My Allocations/Weekly Deals',
								'url': 'admin/function/AdminAllocations'
							},
							{
								'name': 'My Allocations/Weekly Deals Report',
								'url': '/admin/function/AdminAllocationsReport'
							},
							{
								'name': 'Pre-Sell Management',
								'url': '/admin/function/AdminPresellManagement'
							},
							{
								'name': 'Pre-Sell Orders Report',
								'url': '/admin/function/AdminPresellOrdersReport'
							},
							{
								'name': 'Pre-Sell Report',
								'url': '/admin/function/AdminPresellReport'
							}
						],
					},
					{
						'name': 'Search',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
								'name': 'Negative Search Terms',
								'url': '/admin/function/AdminNegativeSearches'
							},
							{
								'name': 'Search Phrase Synonyms',
								'url': '/admin/function/AdminSearchTokens'
							}
						],
					},
					{
						'name': 'OurBooker',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
							'name': 'Account Deregister',
							'url': '/admin/function/OBAccountDeregister'
						}],

						'name': 'Shop By Brand',
						'sub': [{
							'name': 'Supplier Brand Management',
							'url': '/admin/ShopByBrand/ActiveBrandListing'
						}],
					},
					{
						'name': 'Telesales',
						'icon': '<i class="fa-solid fa-computer-mouse"></i>',
						'sub': [{
							'name': 'Telesales System',
							'url': '/admin/telesales'
						}],
						'extraSub': [{
								'name': 'Register Customer',
								'url': '/admin/telesales/entercustomernumber'
							},
							{
								'name': 'Choose Customer',
								'url': '/admin/telesales/selectcustomer'
							},
							{
								'name': 'Customer Search',
								'url': '/admin/telesales/customersearch'
							},
							{
								'name': 'Create Order',
								'url': '/admin/telesales/productorderentry'
							},
							{
								'name': 'Edit Customer Account',
								'url': '/admin/telesales/editcustomeracc'
							},
							{
								'name': 'Recent Purchases',
								'url': '/products/RecentPurchases'
							},
							{
								'name': 'Shopping Lists',
								'url': '/Products/ShoppingList'
							},
							{
								'name': 'My Booker',
								'url': '/my-booker'
							},
							{
								'name': 'Products',
								'url': '/products/categories'
							},
							{
								'name': 'Promotions',
								'url': '/catalog/promotions'
							},
							{
								'name': 'Services',
								'url': '/catalog/services'
							},
							{
								'name': 'Deals For You',
								'url': '/catalog/myallocationshome.aspx'
							}
						]
				}]
}
  