
chrome.action.onClicked.addListener( async () => {
	let url = chrome.runtime.getURL("index.html")
	await chrome.tabs.query(
		{ url:url },
		(result) => {
			if( result.length >= 1 ){
			}else{
				chrome.tabs.create({url})
			}
		})
})