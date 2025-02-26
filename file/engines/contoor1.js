 const gasUrl = 'https://script.google.com/macros/s/AKfycbzOJU0IKSklrtW6HZA2wAt7Y-cHovDkbiT7r9WAABAVJD22hqBJOpF_jlTXgRFeC7kV/exec'; // لینک GAS خود را اینجا بگذارید

    async function fetchSheetValues() {
      try {
        const response = await fetch(gasUrl);
        const data = await response.json();

        if (data.error) {
          console.error('Error:', data.error);
          return { i2: 0, j2: 0, k2: 0, l2: 0 }; // مقادیر پیش‌فرض در صورت بروز خطا
        }

        return data; // دریافت تمام داده‌ها
      } catch (error) {
        console.error('Fetch error:', error);
        return { i2: 0, j2: 0, k2: 0, l2: 0 }; // مقادیر پیش‌فرض در صورت بروز خطا
      }
    }

    async function startCounters() {
      const counters = [
        { id: 'counter1', value: 'i2' },
        { id: 'counter2', value: 'j2' },
        { id: 'counter3', value: 'k2' },
        { id: 'counter4', value: 'l2' }
      ];

      const values = await fetchSheetValues();

      // برای هر کنتور مقدار را واکشی و انیمیشن را اجرا کن
      for (let counter of counters) {
        const counterElement = document.getElementById(counter.id);
        const value = values[counter.value];

        // ریست کردن شمارنده قبل از شروع انیمیشن
        counterElement.textContent = '0';

        // انیمیشن شمارنده
        let current = 0;
        const increment = Math.ceil(value / 100); // افزایش گام‌ها
        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            current = value;
            clearInterval(interval);
          }
          counterElement.textContent = current.toLocaleString(); // نمایش عدد با فرمت
        }, 20); // زمان‌بندی انیمیشن
      }
    }
	// انیمیشن درصد// انیمیشن درصد// انیمیشن درصد// انیمیشن درصد// انیمیشن درصد
	
	async function fetchSheetValues() {
      try {
        const response = await fetch(gasUrl);
        const data = await response.json();

        if (data.error) {
          console.error('Error:', data.error);
          return { m2: 0, n2: 0, o2: 0, p2: 0 }; // مقادیر پیش‌فرض در صورت بروز خطا
        }

        return data; // دریافت تمام داده‌ها
      } catch (error) {
        console.error('Fetch error:', error);
        return { m2: 0, n2: 0, o2: 0, p2: 0 }; // مقادیر پیش‌فرض در صورت بروز خطا
      }
    }

    async function startPercentageCounters() {
      const counters = [
        { id: 'counter5', progressId: 'progress5', value: 'm2' }, // پروژه‌های تجاری
        { id: 'counter6', progressId: 'progress6', value: 'n2' }, // پروژه‌های مسکونی
        { id: 'counter7', progressId: 'progress7', value: 'o2' }, // پروژه‌های اداری
        { id: 'counter8', progressId: 'progress8', value: 'p2' }  // پروژه‌های خدماتی
      ];

      const values = await fetchSheetValues();

      // برای هر کنتور مقدار را واکشی و انیمیشن را اجرا کن
      for (let counter of counters) {
        const counterElement = document.getElementById(counter.id);
        const progressBar = document.getElementById(counter.progressId);
        const value = parseFloat(values[counter.value]);

        // شمارنده و میله پیشرفت
        let current = 0;
        const increment = Math.ceil(value / 100); // افزایش گام‌ها
        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            current = value;
            clearInterval(interval);
          }

          // نمایش درصد عدد و بروزرسانی میله
          counterElement.textContent = `${current}%`;
          progressBar.style.height = `${current}%`;
        }, 20);
      }
    }

    startPercentageCounters();
	