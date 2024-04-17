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
    protected $name;
    protected $last_name;
    protected $id;


    public function __construct($marcador,$name,$last_name,$id)
    {
        $this->marcador = $marcador;
        $this->name = $name;
        $this->last_name = $last_name;
        $this->id = $id;
    }

    public function build()
    {
        return $this->view('emails.resultAvailable')
            ->with([
                'marcador' => $this->marcador,
                'name' => $this->name,
                'last_name' => $this->last_name,
                'id' => $this->id,
            ]);
    }
}
