// 产品数据（从Excel中提取的汇总数据）
const productData = {
    totalSales: 0,
    totalBuyers: 0,
    totalAdImpressions: 0,
    totalImpressions: 0,
    models: [
        {
            id: '201',
            name: '201型',
            fullName: '批发一字开槽不锈钢自攻螺套内外牙螺母转换螺纹牙套变径标准牙',
            totalSales: 284792,
            totalBuyers: 168,
            totalQuantity: 920000,
            conversionRate: 12.5,
            avgUnitPrice: 3280,
            adImpressions: 5253,
            totalImpressions: 6814,
            monthlyData: [
                { month: '2月', sales: 114794, buyers: 35 },
                { month: '3月', sales: 114794, buyers: 35 },
                { month: '4月', sales: 111805, buyers: 47 },
                { month: '5月', sales: 19884, buyers: 28 },
                { month: '6月', sales: 16885, buyers: 30 },
                { month: '7月', sales: 11885, buyers: 25 },
                { month: '8月', sales: 15129, buyers: 19 },
                { month: '9月', sales: 10071, buyers: 14 },
                { month: '10月', sales: 40164, buyers: 12 },
                { month: '11月', sales: 9368, buyers: 22 }
            ]
        },
        {
            id: '307',
            name: '307型',
            fullName: '307三孔螺套/碳钢自攻螺套',
            totalSales: 18246,
            totalBuyers: 18,
            totalQuantity: 15000,
            conversionRate: 6.38,
            avgUnitPrice: 1013,
            adImpressions: 1569,
            totalImpressions: 2000,
            monthlyData: [
                { month: '2月', sales: 181, buyers: 3 },
                { month: '3月', sales: 181, buyers: 3 },
                { month: '4月', sales: 485, buyers: 4 },
                { month: '5月', sales: 5658, buyers: 3 },
                { month: '6月', sales: 7067, buyers: 4 },
                { month: '7月', sales: 2075, buyers: 1 },
                { month: '8月', sales: 519, buyers: 1 },
                { month: '9月', sales: 35, buyers: 1 },
                { month: '10月', sales: 147, buyers: 1 },
                { month: '11月', sales: 348, buyers: 1 }
            ]
        },
        {
            id: '200H',
            name: '200H型',
            fullName: '200H型不锈钢内外牙螺母带介法兰带帽牙套变径转换螺纹套修复螺套',
            totalSales: 11850,
            totalBuyers: 38,
            totalQuantity: 4800,
            conversionRate: 10.26,
            avgUnitPrice: 312,
            adImpressions: 0,
            totalImpressions: 560,
            monthlyData: [
                { month: '2月', sales: 622, buyers: 4 },
                { month: '3月', sales: 622, buyers: 4 },
                { month: '4月', sales: 1136, buyers: 8 },
                { month: '5月', sales: 700, buyers: 3 },
                { month: '6月', sales: 77, buyers: 1 },
                { month: '7月', sales: 1188, buyers: 4 },
                { month: '8月', sales: 242, buyers: 1 },
                { month: '9月', sales: 1967, buyers: 3 },
                { month: '10月', sales: 290, buyers: 1 },
                { month: '11月', sales: 1550, buyers: 3 }
            ]
        },
        {
            id: '钢丝螺套',
            name: '钢丝螺套',
            fullName: '304H不锈钢钢丝螺套螺纹护套修复牙套',
            totalSales: 8925,
            totalBuyers: 12,
            totalQuantity: 56000,
            conversionRate: 2.08,
            avgUnitPrice: 744,
            adImpressions: 3255,
            totalImpressions: 3521,
            monthlyData: [
                { month: '2月', sales: 30, buyers: 1 },
                { month: '3月', sales: 30, buyers: 1 },
                { month: '4月', sales: 186, buyers: 2 },
                { month: '5月', sales: 181, buyers: 2 },
                { month: '6月', sales: 174, buyers: 1 },
                { month: '7月', sales: 12, buyers: 1 },
                { month: '8月', sales: 275, buyers: 2 },
                { month: '9月', sales: 0, buyers: 0 },
                { month: '10月', sales: 117, buyers: 1 },
                { month: '11月', sales: 1023, buyers: 3 }
            ]
        },
        {
            id: 'SKD440',
            name: 'SKD440',
            fullName: '不锈钢SKD440内外牙不锈钢螺套内六角螺母黄铜家具塑料防锈牙套',
            totalSales: 12350,
            totalBuyers: 17,
            totalQuantity: 13500,
            conversionRate: 7.69,
            avgUnitPrice: 726,
            adImpressions: 2577,
            totalImpressions: 2944,
            monthlyData: [
                { month: '2月', sales: 2042, buyers: 4 },
                { month: '3月', sales: 2042, buyers: 4 },
                { month: '4月', sales: 5522, buyers: 7 },
                { month: '5月', sales: 1700, buyers: 4 },
                { month: '6月', sales: 1000, buyers: 1 },
                { month: '7月', sales: 947, buyers: 4 },
                { month: '8月', sales: 457, buyers: 2 },
                { month: '9月', sales: 4522, buyers: 3 },
                { month: '10月', sales: 0, buyers: 0 },
                { month: '11月', sales: 0, buyers: 0 }
            ]
        },
        {
            id: '插销',
            name: '插销螺套',
            fullName: '插销螺套修复英制美制不锈钢插销牙套螺纹护套轻重型带销子螺母',
            totalSales: 21877,
            totalBuyers: 8,
            totalQuantity: 9500,
            conversionRate: 6.45,
            avgUnitPrice: 2735,
            adImpressions: 1324,
            totalImpressions: 1788,
            monthlyData: [
                { month: '2月', sales: 623, buyers: 2 },
                { month: '3月', sales: 623, buyers: 2 },
                { month: '4月', sales: 445, buyers: 2 },
                { month: '6月', sales: 97, buyers: 1 },
                { month: '8月', sales: 810, buyers: 1 },
                { month: '9月', sales: 9597, buyers: 1 },
                { month: '10月', sales: 10240, buyers: 1 },
                { month: '11月', sales: 10622, buyers: 3 }
            ]
        },
        {
            id: '302',
            name: '302型',
            fullName: '302碳钢开槽型内外牙自攻螺套',
            totalSales: 5680,
            totalBuyers: 9,
            totalQuantity: 4200,
            conversionRate: 4.08,
            avgUnitPrice: 631,
            adImpressions: 2179,
            totalImpressions: 2399,
            monthlyData: [
                { month: '7月', sales: 830, buyers: 2 },
                { month: '8月', sales: 573, buyers: 2 },
                { month: '9月', sales: 450, buyers: 3 },
                { month: '10月', sales: 137, buyers: 1 },
                { month: '11月', sales: 0, buyers: 0 }
            ]
        }
    ]
};

// 计算汇总数据
function calculateTotals() {
    let totalSales = 0;
    let totalBuyers = 0;
    let totalAdImpressions = 0;
    let totalImpressions = 0;
    
    productData.models.forEach(model => {
        totalSales += model.totalSales;
        totalBuyers += model.totalBuyers;
        totalAdImpressions += model.adImpressions;
        totalImpressions += model.totalImpressions;
    });
    
    productData.totalSales = totalSales;
    productData.totalBuyers = totalBuyers;
    productData.totalAdImpressions = totalAdImpressions;
    productData.totalImpressions = totalImpressions;
}

// 初始化KPI指标
function initKPIs() {
    calculateTotals();
    
    // 更新KPI卡片
    document.getElementById('total-sales').textContent = `¥ ${productData.totalSales.toLocaleString()}`;
    document.getElementById('total-buyers').textContent = productData.totalBuyers.toLocaleString();
    
    // 计算平均转化率
    const avgConversion = productData.models.reduce((sum, model) => sum + model.conversionRate, 0) / productData.models.length;
    document.getElementById('avg-conversion').textContent = `${avgConversion.toFixed(1)}%`;
    
    // 计算广告花费占比
    const adRatio = productData.totalImpressions > 0 
        ? (productData.totalAdImpressions / productData.totalImpressions * 100).toFixed(1) 
        : 0;
    document.getElementById('ad-ratio').textContent = `${adRatio}%`;
    document.getElementById('total-impressions').textContent = productData.totalImpressions.toLocaleString();
    
    // 计算环比增长（简化示例）
    const lastMonthSales = productData.models.reduce((sum, model) => {
        const lastMonth = model.monthlyData[model.monthlyData.length - 1];
        return sum + (lastMonth ? lastMonth.sales : 0);
    }, 0);
    
    const secondLastMonthSales = productData.models.reduce((sum, model) => {
        const secondLast = model.monthlyData[model.monthlyData.length - 2];
        return sum + (secondLast ? secondLast.sales : 0);
    }, 0);
    
    const growthRate = secondLastMonthSales > 0 
        ? ((lastMonthSales - secondLastMonthSales) / secondLastMonthSales * 100).toFixed(1) 
        : 0;
    
    document.getElementById('sales-growth').textContent = `${growthRate}%`;
    
    // 计算新买家数（简化示例）
    const newBuyers = Math.floor(productData.totalBuyers * 0.3); // 假设30%为新买家
    document.getElementById('new-buyers').textContent = newBuyers.toLocaleString();
}

// 初始化饼图
function initPieChart() {
    const chartDom = document.getElementById('model-pie-chart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: ¥{c} ({d}%)'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 'center',
            textStyle: {
                fontSize: 12
            }
        },
        series: [
            {
                name: '销售额',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: productData.models.map(model => ({
                    name: model.name,
                    value: model.totalSales
                }))
            }
        ],
        color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452']
    };
    
    myChart.setOption(option);
    
    // 窗口大小变化时重绘图表
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 初始化柱状图（型号排行）
function initBarChart() {
    const chartDom = document.getElementById('model-bar-chart');
    const myChart = echarts.init(chartDom);
    
    // 按销售额排序
    const sortedModels = [...productData.models].sort((a, b) => b.totalSales - a.totalSales);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{b}: ¥{c}'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: '¥{value}'
            }
        },
        yAxis: {
            type: 'category',
            data: sortedModels.map(model => model.name),
            axisLabel: {
                fontSize: 12
            }
        },
        series: [
            {
                name: '销售额',
                type: 'bar',
                data: sortedModels.map(model => ({
                    value: model.totalSales,
                    itemStyle: {
                        color: model.totalSales > 50000 ? '#ee6666' : 
                               model.totalSales > 20000 ? '#fac858' : 
                               model.totalSales > 10000 ? '#91cc75' : '#73c0de'
                    }
                })),
                label: {
                    show: true,
                    position: 'right',
                    formatter: '¥{c}'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 初始化转化率图表
function initConversionChart() {
    const chartDom = document.getElementById('conversion-chart');
    const myChart = echarts.init(chartDom);
    
    // 按转化率排序
    const sortedModels = [...productData.models].sort((a, b) => b.conversionRate - a.conversionRate);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: '{b}: {c}%'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: sortedModels.map(model => model.name),
            axisLabel: {
                fontSize: 12,
                interval: 0
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}%'
            }
        },
        series: [
            {
                name: '转化率',
                type: 'bar',
                data: sortedModels.map(model => ({
                    value: model.conversionRate,
                    itemStyle: {
                        color: model.conversionRate > 10 ? '#91cc75' : 
                               model.conversionRate > 5 ? '#fac858' : '#ee6666'
                    }
                })),
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 初始化广告效果图表
function initAdChart() {
    const chartDom = document.getElementById('ad-chart');
    const myChart = echarts.init(chartDom);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}次 ({d}%)'
        },
        series: [
            {
                name: '展现次数',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                data: [
                    { value: productData.totalAdImpressions, name: '广告展现' },
                    { value: productData.totalImpressions - productData.totalAdImpressions, name: '自然展现' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    formatter: '{b}: {c}次\n({d}%)'
                }
            }
        ],
        color: ['#5470c6', '#91cc75']
    };
    
    myChart.setOption(option);
    
    // 计算广告点击转化率（简化示例）
    const totalAdClicks = productData.totalAdImpressions * 0.02; // 假设2%点击率
    const adConversionRate = totalAdClicks > 0 ? (productData.totalBuyers / totalAdClicks * 100).toFixed(2) : 0;
    document.getElementById('ad-conversion-rate').textContent = `${adConversionRate}%`;
    
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 初始化月度趋势图
function initMonthlyTrend() {
    const chartDom = document.getElementById('monthly-trend');
    const myChart = echarts.init(chartDom);
    
    // 汇总各月销售额
    const monthlySales = {};
    productData.models.forEach(model => {
        model.monthlyData.forEach(data => {
            if (!monthlySales[data.month]) {
                monthlySales[data.month] = 0;
            }
            monthlySales[data.month] += data.sales;
        });
    });
    
    const months = ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月'];
    const salesData = months.map(month => monthlySales[month] || 0);
    
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}: ¥{c}'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: months
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '¥{value}'
            }
        },
        series: [
            {
                name: '销售额',
                type: 'line',
                smooth: true,
                data: salesData,
                itemStyle: {
                    color: '#ee6666'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(238, 102, 102, 0.5)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(238, 102, 102, 0.1)'
                        }
                    ])
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 初始化热销产品表格
function initTopProducts() {
    const tableBody = document.getElementById('top-products');
    const sortedModels = [...productData.models].sort((a, b) => b.totalSales - a.totalSales);
    
    let html = '';
    sortedModels.slice(0, 10).forEach((model, index) => {
        const rankClass = index < 3 ? 'fw-bold' : '';
        const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : (index + 1);
        
        html += `
            <tr>
                <td><span class="${rankClass}">${rankIcon}</span></td>
                <td>${model.name}</td>
                <td class="fw-bold">¥${model.totalSales.toLocaleString()}</td>
                <td>
                    <span class="badge ${model.conversionRate > 10 ? 'bg-success' : model.conversionRate > 5 ? 'bg-warning' : 'bg-danger'}">
                        ${model.conversionRate}%
                    </span>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

// 初始化产品详细表格
function initProductTable() {
    const tableBody = document.getElementById('product-table');
    
    let html = '';
    productData.models.forEach(model => {
        const adRatio = model.totalImpressions > 0 
            ? ((model.adImpressions / model.totalImpressions) * 100).toFixed(1) 
            : 0;
        
        html += `
            <tr>
                <td>
                    <span class="badge bg-primary">${model.name}</span>
                </td>
                <td>
                    <small>${model.fullName.substring(0, 30)}${model.fullName.length > 30 ? '...' : ''}</small>
                </td>
                <td class="fw-bold text-success">¥${model.totalSales.toLocaleString()}</td>
                <td>${model.totalBuyers}</td>
                <td>
                    <div class="progress" style="height: 6px;">
                        <div class="progress-bar ${model.conversionRate > 10 ? 'bg-success' : model.conversionRate > 5 ? 'bg-warning' : 'bg-danger'}" 
                             role="progressbar" 
                             style="width: ${Math.min(model.conversionRate * 5, 100)}%">
                        </div>
                    </div>
                    <small>${model.conversionRate}%</small>
                </td>
                <td>¥${model.avgUnitPrice.toLocaleString()}</td>
                <td>${adRatio}%</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="showModelDetail('${model.id}')">
                        <i class="fas fa-chart-bar"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
    
    // 添加搜索功能
    document.getElementById('search-product').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = tableBody.getElementsByTagName('tr');
        
        for (let row of rows) {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        }
    });
}

// 显示型号详情（示例函数）
function showModelDetail(modelId) {
    const model = productData.models.find(m => m.id === modelId);
    if (model) {
        alert(`型号: ${model.name}\n销售额: ¥${model.totalSales.toLocaleString()}\n买家数: ${model.totalBuyers}\n转化率: ${model.conversionRate}%\n客单价: ¥${model.avgUnitPrice.toLocaleString()}`);
    }
}

// 切换图表类型
function changeChartType(type) {
    const chartDom = document.getElementById('model-pie-chart');
    const myChart = echarts.getInstanceByDom(chartDom);
    
    let data = [];
    let title = '';
    
    switch(type) {
        case 'sales':
            data = productData.models.map(model => ({
                name: model.name,
                value: model.totalSales
            }));
            title = '销售额';
            break;
        case 'quantity':
            data = productData.models.map(model => ({
                name: model.name,
                value: model.totalQuantity
            }));
            title = '销售量';
            break;
        case 'buyers':
            data = productData.models.map(model => ({
                name: model.name,
                value: model.totalBuyers
            }));
            title = '买家数';
            break;
    }
    
    const option = {
        series: [{
            name: title,
            data: data
        }]
    };
    
    myChart.setOption(option);
}

// 页面加载完成后初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    initKPIs();
    initPieChart();
    initBarChart();
    initConversionChart();
    initAdChart();
    initMonthlyTrend();
    initTopProducts();
    initProductTable();
    
    // 更新数据日期
    document.getElementById('update-date').textContent = new Date().toLocaleDateString('zh-CN');
    
    // 添加导出功能
    document.querySelector('footer a[href="#"]').addEventListener('click', function(e) {
        e.preventDefault();
        alert('导出功能需要后端支持，请部署到服务器后配置导出接口。');
    });
});
