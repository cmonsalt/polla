<?php

// En app/Mail/ResultAvailableMail.php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResultAvailableMail extends Mailable
{
    use Queueable, SerializesModels;

    public $marcador;

    public function __construct($marcador)
    {
        $this->marcador = $marcador;
    }

    public function build()
    {
        return $this->view('emails.resultAvailable')
                    ->with([
                        'marcador' => $this->marcador,
                    ]);
    }
}
