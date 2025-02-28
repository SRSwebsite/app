function startAnimation() {
  let glowInTexts = document.querySelectorAll(".glowIn");
  glowInTexts.forEach(glowInText => {
    let letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      glowInText.append(span);
    });
  });
}

function runAnimationCycle() {
  startAnimation();
  let totalAnimationTime = document.querySelector(".glowIn").textContent.length * 0.05 + 0.8;
  let delayAfterCompletion = 3;
  setTimeout(runAnimationCycle, (totalAnimationTime + delayAfterCompletion) * 1000);
}

runAnimationCycle();
function toggleTab(event, tabId) {
      const tabButton = event.target;
      const tabContent = document.getElementById(tabId);

      if (tabButton.classList.contains('active')) {
        tabButton.classList.remove('active');
        tabContent.style.opacity = '0';
        tabContent.style.transform = 'translateY(-20px)';
        tabContent.style.maxHeight = '0';
      } else {
        const activeButton = document.querySelector('.tab-button.active');
        const activeContent = document.querySelector('.tab-content[style*="max-height"]');

        if (activeButton) {
          activeButton.classList.remove('active');
          activeContent.style.opacity = '0';
          activeContent.style.transform = 'translateY(-20px)';
          activeContent.style.maxHeight = '0';
        }

        tabButton.classList.add('active');
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateY(0)';
        tabContent.style.maxHeight = '500px';
      }
    }
	function toggleTab(event, tabId) {
      const tabButton = event.target;
      const tabContent = document.getElementById(tabId);

      if (tabButton.classList.contains('active')) {
        tabButton.classList.remove('active');
        tabContent.style.opacity = '0';
        tabContent.style.transform = 'translateY(-20px)';
        tabContent.style.maxHeight = '0';
      } else {
        const activeButton = document.querySelector('.tab-button.active');
        const activeContent = document.querySelector('.tab-content[style*="max-height"]');

        if (activeButton) {
          activeButton.classList.remove('active');
          activeContent.style.opacity = '0';
          activeContent.style.transform = 'translateY(-20px)';
          activeContent.style.maxHeight = '0';
        }

        tabButton.classList.add('active');
        tabContent.style.opacity = '1';
        tabContent.style.transform = 'translateY(0)';
        tabContent.style.maxHeight = '500px';
      }
    }
	
	const videoUrl = "https://www.example.com"; // لینک ویدیو یا محتوای شما

    function toggleShareOptions(event) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        event.stopPropagation(); // جلوگیری از بستن منو هنگام کلیک بر روی دکمه
        const options = document.getElementById("shareOptions");
        options.style.display = options.style.display === "block" ? "none" : "block";
    }

   // توابع اشتراک‌گذاری
   function shareOnWhatsApp() {
       window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnTelegram() {
       window.open(`https://telegram.me/share/url?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnFacebook() {
       window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnX() {
       window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareByEmail() {
       window.location.href = `mailto:?subject=Check this out&body=${encodeURIComponent(videoUrl)}`;
   }

   function shareOnTakoTalk() {
       alert("امکان اشتراک‌گذاری در TakoTalk وجود ندارد.");
   }

   function shareOnReddit() {
       window.open(`https://www.reddit.com/submit?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnVK() {
       window.open(`https://vk.com/share.php?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnOK() {
       window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnPinterest() {
       window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnBlogger() {
       alert("امکان اشتراک‌گذاری در Blogger وجود ندارد.");
   }

   function shareOnTumblr() {
       window.open(`https://www.tumblr.com/share/link?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnLinkedIn() {
       window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(videoUrl)}`, '_blank');
   }

   function shareOnMix() {
       alert("امکان اشتراک‌گذاری در Mix وجود ندارد.");
   }

   function shareOnGoo() {
       alert("امکان اشتراک‌گذاری در Goo وجود ندارد.");
   }

   function copyLink() {
       navigator.clipboard.writeText(videoUrl).then(() => {
           alert("لینک کپی شد!");
       }, () => {
           alert("خطا در کپی لینک.");
       });
   }

   // بستن منوی اشتراک‌گذاری اگر کاربر خارج از آن کلیک کند
   window.onclick = function(event) {
       const options = document.getElementById("shareOptions");
       if (!event.target.matches('.btn') && options.style.display === "block") {
           options.style.display = "none";
       }
   }
   // بستن منوی اشتراک‌گذاری
function closeShareOptions() {
    const options = document.getElementById("shareOptions");
    options.style.display = "none"; // منو را می‌بندد
}

   
// تابع برای باز کردن پاپ‌آپ
function openModal(url) {
  const modal = document.getElementById("orderFormModal");
  const iframe = modal.querySelector("iframe");

  if (modal && iframe) {
    iframe.src = `https://srswebsite.github.io/app/form/SRS_form.html`;  // تغییر URL iframe
    modal.style.display = "block"; // نمایش پاپ‌آپ
  }
}

// تابع برای بستن پاپ‌آپ
function closeModal() {
  const modal = document.getElementById("orderFormModal");
  if (modal) {
    modal.style.display = "none"; // پنهان کردن پاپ‌آپ
  }
}

// بستن پاپ‌آپ با کلیک خارج از آن
window.onclick = function(event) {
  const modal = document.getElementById("orderFormModal");
  if (modal && event.target == modal) {
    closeModal();
  }
}
document.getElementById('accordionToggle').addEventListener('click', function (e) {
  e.preventDefault();
  var panel = document.getElementById('accordionPanel');
  panel.style.display = (panel.style.display === 'flex') ? 'none' : 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function (e) {
  var panel = document.getElementById('accordionPanel');
  panel.style.display = 'none';
});

function download(platform) {
  var downloadLinks = {
    android: 'https://your-android-download-link.com',
    ios: 'https://your-ios-download-link.com',
    windows: 'https://your-windows-download-link.com',
    mac: 'https://your-mac-download-link.com'
  };

  window.location.href = downloadLinks[platform];
}

