var ms = 00;
        var s = 00;
        var m = 00;

        var counter;

        var start = document.querySelector('.start');
        var stop = document.querySelector('.stop');
        var reset = document.querySelector('.reset');
        var time = document.querySelector('.time');
        start.addEventListener('click' , function()
        {
            if(!counter)
            {
                counter = setInterval(run , 10);
            }
            function run()
            {
                time.textContent = m + ":" + s + ":" + ms;
                ms++;

                if(ms == 100)
                {
                    ms = 0;
                    s++;
                }

                if(s == 60)
                {
                    s = 0;
                    m++;
                }
            }
        });

        stop.addEventListener('click' , function()
        {
            clearInterval(counter);
            counter = false;
        });


        reset.addEventListener('click' , function()
        {
            clearInterval(counter);
            counter = false;
            ms = 0;
            s = 0;
            m = 0;
            time.textContent = m + ":" + s + ":" + ms;
        });

        function current_time()
        {
            return m + ":" + s + ":" + ms;
        };