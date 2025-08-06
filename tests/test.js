const fs = require('fs');
const path = require('path');

// Simple test suite
function runTests() {
    console.log('🧪 Running basic tests...\n');
    
    let testsPassed = 0;
    let testsTotal = 0;

    // Test 1: Check if index.html exists
    testsTotal++;
    if (fs.existsSync('index.html')) {
        console.log('✅ Test 1 PASSED: index.html exists');
        testsPassed++;
    } else {
        console.log('❌ Test 1 FAILED: index.html not found');
    }

    // Test 2: Check if CSS file exists
    testsTotal++;
    if (fs.existsSync('css/styles.css')) {
        console.log('✅ Test 2 PASSED: styles.css exists');
        testsPassed++;
    } else {
        console.log('❌ Test 2 FAILED: styles.css not found');
    }

    // Test 3: Check if JavaScript file exists
    testsTotal++;
    if (fs.existsSync('js/script.js')) {
        console.log('✅ Test 3 PASSED: script.js exists');
        testsPassed++;
    } else {
        console.log('❌ Test 3 FAILED: script.js not found');
    }

    // Test 4: Check HTML content
    testsTotal++;
    if (fs.existsSync('index.html')) {
        const htmlContent = fs.readFileSync('index.html', 'utf8');
        if (htmlContent.includes('<title>') && htmlContent.includes('</html>')) {
            console.log('✅ Test 4 PASSED: HTML structure is valid');
            testsPassed++;
        } else {
            console.log('❌ Test 4 FAILED: HTML structure is invalid');
        }
    }

    // Test 5: Check if required directories exist
    testsTotal++;
    const requiredDirs = ['css', 'js', '.github/workflows'];
    const allDirsExist = requiredDirs.every(dir => fs.existsSync(dir));
    
    if (allDirsExist) {
        console.log('✅ Test 5 PASSED: All required directories exist');
        testsPassed++;
    } else {
        console.log('❌ Test 5 FAILED: Missing required directories');
    }

    // Results
    console.log(`\n📊 Test Results: ${testsPassed}/${testsTotal} tests passed`);
    
    if (testsPassed === testsTotal) {
        console.log('🎉 All tests passed!');
        process.exit(0);
    } else {
        console.log('💥 Some tests failed!');
        process.exit(1);
    }
}

// Run tests
runTests();