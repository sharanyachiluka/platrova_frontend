import React from 'react';

class sample extends React.Component {
    render() {
        return (
            <body>
<form name="loginForm">
<table width="20%" bgcolor="0099CC" align="center">

<tr>
<td colspan="2"><center><font size="4"><b>HTML Login Page</b></font></center></td>
</tr>

<tr>
<td>Username:</td>
<td><input type="text" size="25" name="userid"/></td>
</tr>

<tr>
<td>Password:</td>
<td><input type="Password" size="25" name="pwd"/></td>
</tr>

<tr>
<td ><input type="Reset"/></td>
<td><input type="submit" onclick="return check(this.form)" value="Login"/></td>
</tr>

</table>
</form>
</body>
        );
    }
 }
 export default sample;