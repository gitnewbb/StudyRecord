async function makeIssue(){
    const token =process.env.GITHUB_TOKEN;
    const OWNER="gitnewbb"
    const REPO = "forstudy/tree/main/250124";
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`,{
        method: 'POST',
        headers: {Authorization :' Bearer ${token}',

        },
        body : JSON.stringify({
            title: "Lucky Numbers",
            body:'${Math.floor(Math.random()*100)+1}',
        })

    });
if (response.ok) {
    console.log("succenss");

}else {console.log("fail");}
}


makeIssue();