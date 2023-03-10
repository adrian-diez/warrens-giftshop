<h1> Warren's Giftshop </h1>

<h2>An example of a simple web page to show what can be done using mostly HTML.</h2>

<p>The project took less than a week to develop, as it was meant to serve as a demonstration of features more than a complete page.</p>

<hr>

<h3> Main features </h3>
<ul>
  <li>Landing page with <strong>custom font</strong> and <strong>background</strong>.</li>
  <li>Products page with <strong>dynamically loaded</strong> list of items.</li>
  <li><strong>Events</strong> on hover and input focus; <strong>breadcrumbs</strong> (style choice to let the user know where they are within the page).</li>
  <li>Use of iframes to show <strong>location map</strong> (location fictional).</li>
</ul>
<br>
<h3>Main challenges</h3>
<ul>
  <li><strong>Responsiveness</strong> of web page (make it look good regardless of screen size).</li>
  <li><strong>Special characters</strong> (such as "¿" or "á") with custom font.</li>
  <li>Not knowing how to link </strong>several Javascript files</strong> to the same html document.</li>
</ul>

<h4>Solutions</h4>
<ul>
  <li>Responsiveness --> Use of scalable units of measure, such as <em><strong>em, rem</strong></em> or <em><strong>vh, vw</strong></em>.</li>
  <li>Avoid use of such characters; use specific fonts when trying to write them.</li>
  <li>Use of several <strong><script></strong> tags and the reserved keyword <strong>defer</strong> to load them once the document is ready.</li>
</ul>

<hr>

Landing page
![login](https://user-images.githubusercontent.com/77986392/224255121-13d7328c-8b3d-46b0-b9f4-fb337a4f60fb.png)

Products page
![products](https://user-images.githubusercontent.com/77986392/224255196-86b5adcf-1f6b-4c25-83b1-8c9f4140bc05.png)

Location page
![location](https://user-images.githubusercontent.com/77986392/224255240-2b71095d-f78a-4c03-9fbd-6d7f2569b188.png)
