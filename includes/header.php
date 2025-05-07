<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Responsive Header</title>
  <link rel="stylesheet" href="./css/header.css" />
  <link rel="stylesheet" href="./css/style.css" />
</head>
<body>

  <header class="main-header">
    <div class="container">
      <div class="logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>

      <!-- The hamburger menu toggle -->
      <div class="menu-toggle" id="menu-toggle">&#9776;</div>
      
      <nav class="navbar" id="navbar">
        <!-- The close button (X) -->
        <div class="close-menu" id="close-menu">&times;</div>
        
        <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>

          <li class="dropdown">
            <a href="#">Love Problem Specialist</a>
            <ul class="submenu">
              <li><a href="#">Love Marriage</a></li>
              <li><a href="#">Relationship Advice</a></li>
              <li><a href="#">Lost Love Back</a></li>
              <li><a href="#">Breakup Solutions</a></li>
              <li><a href="#">Attraction Remedies</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#">Negative Energy Removal</a>
            <ul class="submenu">
              <li><a href="#">Evil Eye Protection</a></li>
              <li><a href="#">Bad Luck Removal</a></li>
              <li><a href="#">Aura Cleansing</a></li>
              <li><a href="#">Energy Healing</a></li>
              <li><a href="#">Home Energy Boost</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#">Spiritual Healer</a>
            <ul class="submenu">
              <li><a href="#">Meditation Guidance</a></li>
              <li><a href="#">Chakra Balancing</a></li>
              <li><a href="#">Mantra Healing</a></li>
              <li><a href="#">Spiritual Counseling</a></li>
              <li><a href="#">Kundalini Awakening</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#">Other Expertise</a>
            <ul class="submenu">
              <li><a href="#">Vastu Consultation</a></li>
              <li><a href="#">Career Solutions</a></li>
              <li><a href="#">Business Growth</a></li>
              <li><a href="#">Family Problems</a></li>
              <li><a href="#">Court Case Help</a></li>
            </ul>
          </li>

          <li class="dropdown">
            <a href="#">Pooja Services</a>
            <ul class="submenu">
              <li><a href="#">Ganesh Pooja</a></li>
              <li><a href="#">Kaal Sarp Dosh</a></li>
              <li><a href="#">Navgrah Shanti</a></li>
              <li><a href="#">Mahamrityunjay Jaap</a></li>
              <li><a href="#">Durga Saptashati</a></li>
            </ul>
          </li>

          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>

  

  <script src="./js/header.js"></script>
  <!-- <script src="./js/testomonial.js"></script> -->
  
</body>
</html>