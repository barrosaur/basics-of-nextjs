<code>useEffect</code><br>
<p>React Hook that tells React DO SOME CODE WHEN:</p><br>
<ul>
    <li>This component re-renders</li>
    <li>This component mounts</li>
    <li>The state of a value</li>
</ul><br>

<code>useEffect(function, [dependencies])</code><br>
<table>
    <tbody>
        <tr>
            <td>
                <code>useEffect(() => {})</code>
            </td>
            <td>
                <p>Runs after every re-render</p>
            </td>
        </tr>
        <tr>
            <td>
                <code>useEffect(() => {}, [])</code>
            </td>
            <td>
                <p>Runs only on mount</p>
            </td>
        </tr>
        <tr>
            <td>
                <code>useEffect(() => {}, [value])</code>
            </td>
            <td>
                <p>Runs on mount + when value changes</p>
            </td>
        </tr>
    </tbody>
</table>

<h2>USES:</h2> <br>
<ul>
    <ol>Event Listeners</ol>
    <ol>DOM manipulation</ol>
    <ol>Subscriptions (real-time updates)</ol>
    <ol>Fetching Data from an API</ol>
    <ol>Clean up when a component unmounts</ol>
</ul>