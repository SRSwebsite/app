 // داده‌ها برای نمودار
        const data = {
            labels: [
                'ISO (International Organization for Standardization)',
                'International Code Council (ICC)',
                'ASTM International',
                'CEN (European Committee for Standardization)',
                'BSI (British Standards Institution)',
                'NFPA (National Fire Protection Association)',
                'استانداردهای ملی ایران (ISIRI)',
                'مقررات ملی ساختمان (ایران)',
                'استاندارد 2800 (مقاومت در برابر زلزله)',
                'استانداردهای طراحی سازه‌های بتنی',
                'استانداردهای مصالح ساختمانی (ایران)',
                'استانداردهای معماری و طراحی فضای داخلی (ایران)'
            ],
            datasets: [{
                label: 'سهم استانداردها',
                data: [15, 10, 10, 10, 5, 10, 10, 20, 10, 5, 5, 10],
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', 
                    '#9966FF', '#FF33CC', '#FF3366', '#33CCFF', '#FFD700',
                    '#FF6600', '#00FF00'
                ],
                hoverOffset: 4
            }]
        };

        // تنظیمات نمودار استوانه‌ای سه‌بعدی
        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    // فعال‌سازی پلاگین 3D
                    chart3d: {
                        enabled: true, // فعال کردن حالت 3D
                        depth: 40,     // عمق استوانه
                        rotate: true,  // چرخش نمودار
                    }
                }
            }
        };

        // رسم نمودار
        const my3DPieChart = new Chart(
            document.getElementById('my3DPieChart'),
            config
        );